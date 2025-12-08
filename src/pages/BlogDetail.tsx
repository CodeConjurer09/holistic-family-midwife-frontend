import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2, Tag, Eye } from 'lucide-react';
import { api } from '@/services/api';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: {
    id: number;
    name: string;
    avatar?: string;
    bio?: string;
  };
  category: {
    id: number;
    name: string;
    slug: string;
  };
  tags: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  published_date: string;
  reading_time: number;
  is_featured: boolean;
  views_count: number;
}

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Fetch the specific blog post by slug
      const response = await api.getBlogPost(slug);
      setPost(response);

      // Fetch related posts from the same category
      if (response.category) {
        const relatedResponse = await api.searchBlogPosts({
          category: response.category.slug,
          page_size: 4,
        });
        // Filter out the current post
        const filtered = relatedResponse.results.filter(
          (p: BlogPost) => p.id !== response.id
        );
        setRelatedPosts(filtered.slice(0, 3));
      }
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError('Failed to load blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy link to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-light-sage py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-light-sage py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
            <p className="text-muted-foreground mb-6">
              {error || 'The article you are looking for does not exist.'}
            </p>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light-sage">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/blog')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Category and Date */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            to={`/blog?category=${post.category.slug}`}
            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors"
          >
            {post.category.name}
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.published_date)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{post.reading_time} min read</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author Info and Share */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b">
          <div className="flex items-center gap-4">
            {post.author.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-14 h-14 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold text-lg">{post.author.name}</p>
              {post.author.bio && (
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              )}
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap py-8 border-t border-b">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <Link
                key={tag.id}
                to={`/blog?tag=${tag.slug}`}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        )}

        {/* Views Counter */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-6">
          <Eye className="h-4 w-4" />
          <span>{post.views_count} views</span>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 py-16 max-w-6xl">
          <h2 className="font-serif text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card
                key={relatedPost.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group"
              >
                {relatedPost.featured_image && (
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={relatedPost.featured_image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(relatedPost.published_date)}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full"
                  >
                    <Link to={`/blog/${relatedPost.slug}`}>
                      Read More
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;
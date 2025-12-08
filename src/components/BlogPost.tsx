import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
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

const BlogComponent = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'pregnancy', name: 'Pregnancy' },
    { id: 'birth', name: 'Birth' },
    { id: 'postpartum', name: 'Postpartum' }
  ];

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      const response = await api.searchBlogPosts({
        page_size: 100 // Increased to fetch more posts
      });
      setPosts(response.results);
      setFilteredPosts(response.results);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setPosts([]);
      setFilteredPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category.slug === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory, posts]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Optimize image URL by adding size parameters if your backend supports it
  const getOptimizedImageUrl = (url: string, width: number = 800) => {
    if (!url) return null;
    // If your backend supports image resizing, append parameters
    // Adjust this based on your backend's image optimization capabilities
    return url.includes('?') ? `${url}&w=${width}` : `${url}?w=${width}`;
  };

  // Get the first featured post to display prominently
  const featuredPost = filteredPosts.find(post => post.is_featured);
  // Show ALL other posts (including other featured posts if any)
  const regularPosts = featuredPost 
    ? filteredPosts.filter(post => post.id !== featuredPost.id)
    : filteredPosts;

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-light-sage">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading articles...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-light-sage">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Blog</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Latest Articles & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice, tips, and stories to support your journey through pregnancy, birth, and motherhood.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary/10'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 animate-fadeIn">
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className={`grid ${featuredPost.featured_image ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-0`}>
                {featuredPost.featured_image && (
                  <div className="relative overflow-hidden h-64 md:h-auto">
                    <img
                      src={getOptimizedImageUrl(featuredPost.featured_image, 800)}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                )}

                <CardContent className="p-8 flex flex-col justify-center">
                  {!featuredPost.featured_image && (
                    <div className="mb-4">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {featuredPost.category.name}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.published_date)}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {featuredPost.author.avatar && (
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div>
                        <p className="font-semibold text-sm">{featuredPost.author.name}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{featuredPost.reading_time} min read</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="bg-primary text-white hover:bg-primary/90 w-full md:w-auto">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card
                key={post.id}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer animate-fadeIn flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {post.featured_image && (
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={getOptimizedImageUrl(post.featured_image, 600)}
                      alt={post.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredCard === post.id ? 'scale-110' : 'scale-100'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                        {post.category.name}
                      </span>
                    </div>
                  </div>
                )}

                <CardContent className={`${post.featured_image ? 'p-6' : 'p-6 pt-8'} flex-1 flex flex-col`}>
                  {!post.featured_image && (
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold inline-block">
                        {post.category.name}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.published_date)}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      {post.author.avatar && (
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.reading_time} min</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          // Only show "no blogs" message when there are posts but filtering removed them all
          filteredPosts.length === 0 && posts.length > 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )
        )}

        {/* Show when there are truly no posts at all */}
        {posts.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles available at the moment.</p>
          </div>
        )}

        {/* Load More Button */}
        {regularPosts.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogComponent;
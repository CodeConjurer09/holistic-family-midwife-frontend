import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Search, X, Sparkles } from 'lucide-react';
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

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    fetchCategories();
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    // Update URL params when filters change
    const params: Record<string, string> = {};
    if (searchQuery) params.search = searchQuery;
    if (selectedCategory !== 'all') params.category = selectedCategory;
    setSearchParams(params);
  }, [searchQuery, selectedCategory, setSearchParams]);

  const fetchCategories = async () => {
    try {
      const data = await api.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchBlogPosts = async (page: number = 1) => {
    try {
      setLoading(true);
      const response = await api.getBlogPosts({
        page,
        page_size: 12,
        ordering: '-published_date'
      });
      
      if (page === 1) {
        setPosts(response.results);
        setFilteredPosts(response.results);
      } else {
        setPosts(prev => [...prev, ...response.results]);
        setFilteredPosts(prev => [...prev, ...response.results]);
      }
      
      setHasMore(!!response.next);
      setCurrentPage(page);
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

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category.slug === selectedCategory);
    }

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

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const loadMore = () => {
    fetchBlogPosts(currentPage + 1);
  };

  const featuredPost = filteredPosts.find(post => post.is_featured);
  const regularPosts = featuredPost 
    ? filteredPosts.filter(post => post.id !== featuredPost.id)
    : filteredPosts;

  const hasActiveFilters = searchQuery || selectedCategory !== 'all';

  if (loading && currentPage === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-light-sage/30">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading articles...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light-sage/30">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .blog-card {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .blog-card:nth-child(1) { animation-delay: 0.1s; }
        .blog-card:nth-child(2) { animation-delay: 0.2s; }
        .blog-card:nth-child(3) { animation-delay: 0.3s; }
        .blog-card:nth-child(4) { animation-delay: 0.1s; }
        .blog-card:nth-child(5) { animation-delay: 0.2s; }
        .blog-card:nth-child(6) { animation-delay: 0.3s; }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-light-sage to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bS0yMCAwYzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Expert Insights & Guidance</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-primary">Blog</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Expert advice, tips, and stories to support your journey through pregnancy, birth, and motherhood
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
                className="whitespace-nowrap"
              >
                All Posts
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.slug ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.slug)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="whitespace-nowrap"
              >
                <X className="mr-2 h-4 w-4" />
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span>Showing results for:</span>
              {searchQuery && (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  "{searchQuery}"
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  {categories.find(c => c.slug === selectedCategory)?.name}
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !hasActiveFilters && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden border-none shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <div className={`grid ${featuredPost.featured_image ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-0`}>
                {featuredPost.featured_image && (
                  <div className="relative overflow-hidden h-96 md:h-auto">
                    <img
                      src={featuredPost.featured_image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </div>
                  </div>
                )}

                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {featuredPost.category.name}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.published_date)}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {featuredPost.author.avatar && (
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="font-semibold">{featuredPost.author.name}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{featuredPost.reading_time} min read</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="bg-primary text-white hover:bg-primary/90 w-full md:w-auto group/btn">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {regularPosts.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold">
                  {hasActiveFilters ? 'Search Results' : 'Latest Articles'}
                </h2>
                <p className="text-muted-foreground mt-2">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card
                    key={post.id}
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer blog-card flex flex-col"
                  >
                    {post.featured_image && (
                      <div className="relative overflow-hidden h-56">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            hoveredCard === post.id ? 'scale-110' : 'scale-100'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold shadow-lg">
                            {post.category.name}
                          </span>
                        </div>
                      </div>
                    )}

                    <CardContent className="p-6 flex-1 flex flex-col">
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

              {/* Load More Button */}
              {hasMore && !hasActiveFilters && (
                <div className="text-center mt-12">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={loadMore}
                    disabled={loading}
                    className="hover:bg-primary hover:text-white transition-colors"
                  >
                    {loading ? 'Loading...' : 'Load More Articles'}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">No Articles Found</h3>
                <p className="text-muted-foreground mb-6">
                  {hasActiveFilters 
                    ? "We couldn't find any articles matching your search criteria. Try adjusting your filters."
                    : "No articles are available at the moment. Check back soon!"}
                </p>
                {hasActiveFilters && (
                  <Button onClick={clearFilters} variant="outline">
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-light-sage to-primary/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-2xl text-center border-none bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-12 pb-12 px-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Schedule a consultation to learn more about our services and discuss how we can support your maternal health journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-all">
                  <Link to="/booking">Book Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="shadow-lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
export interface Post {
    id: number;
    title: string;
    content: string;
    image?: string;
    authorName: string;
    createdAt: Date;
  }
  
  // Sample blog posts
  export const posts: Post[] = [
    {
      id: 1,
      title: "The Future of Cloud Computing",
      content: "Cloud computing continues to evolve at a rapid pace. In this article, we explore the latest trends and technologies shaping the future of cloud infrastructure...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
      authorName: "Fackson Kangwa",
      createdAt: new Date("2024-03-01"),
    },
    {
      id: 2,
      title: "AI in Business: A Practical Guide",
      content: "Artificial Intelligence is transforming how businesses operate. Learn how to implement AI solutions in your organization effectively...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
      authorName: "Joseph Banda",
      createdAt: new Date("2024-02-28"),
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices",
      content: "With increasing cyber threats, protecting your digital assets is more important than ever. Discover the essential cybersecurity practices...",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=2070",
      authorName: "Chimfwembe Kangwa",
      createdAt: new Date("2024-02-25"),
    },
  ];
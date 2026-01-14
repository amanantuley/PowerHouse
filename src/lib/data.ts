export const trainers = [
  {
    id: 1,
    name: 'Alex "The Titan" Carter',
    specialty: 'Strength & Conditioning',
    bio: 'With over a decade of experience in competitive powerlifting, Alex specializes in building raw strength and explosive power. His no-nonsense approach is perfect for those serious about lifting heavy and achieving new personal records.',
    imageId: 'trainer-1',
  },
  {
    id: 2,
    name: 'Jasmine "Zen" Lee',
    specialty: 'Yoga & Flexibility',
    bio: 'Jasmine combines traditional yoga with modern mobility techniques to help you increase flexibility, reduce stress, and improve mind-body connection. Her classes are a sanctuary for recovery and growth.',
    imageId: 'trainer-4',
  },
  {
    id: 3,
    name: 'Marcus "The Machine" Cole',
    specialty: 'HIIT & Endurance',
    bio: 'Marcus is an expert in high-intensity interval training and cardiovascular endurance. His energetic sessions are designed to push your limits, torch calories, and build unstoppable stamina.',
    imageId: 'trainer-3',
  },
  {
    id: 4,
    name: 'Sarah "Phoenix" Chen',
    specialty: 'Body Transformation',
    bio: 'Sarah is a certified nutritionist and transformation coach. She focuses on holistic lifestyle changes, combining personalized workout plans with dietary guidance to help you reinvent yourself from the inside out.',
    imageId: 'trainer-2',
  },
];

export const memberships = [
  {
    name: 'Alpha',
    price: '49',
    features: ['Unlimited Gym Access', 'Standard Locker Room', 'Basic Fitness Assessment', 'Email Support'],
    isPopular: false,
  },
  {
    name: 'Beast',
    price: '79',
    features: [
      'All Alpha Benefits',
      'Access to All Group Classes',
      'Premium Locker Room with Sauna',
      '1x Monthly Personal Training Session',
      'Priority Support',
    ],
    isPopular: true,
  },
  {
    name: 'Legend',
    price: '129',
    features: [
      'All Beast Benefits',
      'Unlimited Personal Training Sessions',
      'Personalized Nutrition Plan',
      'Towel Service',
      'Dedicated VIP Support',
    ],
    isPopular: false,
  },
];

export const transformations = [
  {
    id: 1,
    name: 'Mike R.',
    story: "In 6 months, I didn't just lose 50lbs; I gained a new perspective on life. The support at PowerHouse is unmatched.",
    beforeImageId: 'transformation-1a',
    afterImageId: 'transformation-1b',
  },
  {
    id: 2,
    name: 'Jessica L.',
    story: 'From couch potato to marathon runner. I never thought it was possible, but the trainers here believed in me every step of the way.',
    beforeImageId: 'transformation-2a',
    afterImageId: 'transformation-2b',
  },
  {
    id: 3,
    name: 'David C.',
    story: "Building muscle was always a struggle. With a proper plan and guidance, I've packed on 15lbs of lean mass and feel stronger than ever.",
    beforeImageId: 'transformation-3a',
    afterImageId: 'transformation-3b',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'The 5 Best Foods for Muscle Recovery',
    excerpt: 'Fuel your body right. Discover the top foods that help repair muscle, reduce soreness, and get you back in the gym faster.',
    date: '2024-05-15',
    imageId: 'blog-1',
  },
  {
    id: 2,
    title: 'Dynamic vs. Static Stretching: What You Need to Know',
    excerpt: "Are you stretching correctly? We break down the difference and explain when to use each type for optimal performance and safety.",
    date: '2024-05-10',
    imageId: 'blog-2',
  },
  {
    id: 3,
    title: 'Hydration 101: How Water Fuels Your Workout',
    excerpt: "It's more than just quenching thirst. Learn how proper hydration can boost your strength, endurance, and overall results.",
    date: '2024-05-05',
    imageId: 'blog-3',
  },
];

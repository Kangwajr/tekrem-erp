const team = [
  {
    name: 'Chimfwembe Kangwa',
    role: 'CTO/Developer',
    image: '/assets/images/ck.png',
  },
  {
    name: 'Joseph Banda',
    role: 'Operations Manager/Developer',
    image: '/assets/images/jb.png',
  },
  {
    name: 'Fackson Kangwa',
    role: 'UI/UX Designer/Developer',
    image: '/assets/images/fk.png',
  },
  {
    name: 'Joel Chabana',
    role: 'Marketing Manager/Finance',
    image: '/assets/images/jc.png',
  },
  {
    name: 'Joseph Banda',
    role: 'Sales Representative/Finance',
    image: '/assets/images/jb98.png',
  }, 
];

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600">Meet the experts behind our success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="text-center animate-fadeIn hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
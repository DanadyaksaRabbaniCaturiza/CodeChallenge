const TeamComponent = ({ name, role, bio, image }) => (
  <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-6">
    <img
      className="w-full h-64 object-cover"
      src={image}
      alt={`${name}'s portrait`}
    />
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 text-sm">{role}</p>
      <p className="text-gray-800 mt-3">{bio}</p>
    </div>
  </div>
);

export default TeamComponent;

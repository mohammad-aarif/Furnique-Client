const Error = () => {
    return (
      <div className="flex h-96 md:flex-row gap-4 p-4">
      {/* Large Image on the Left */}
      <div className="w-full md:w-1/2">
      <h1>sofa</h1>
        <img
          src="/src/assets/sofa.jpg"
          alt="Large"
          className="h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Column with Two Smaller Images */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <img
          src="/src/assets/sofa.jpg"
          alt="Small 1"
          className="w-full h-1/2 object-cover rounded-lg"
        />
        <img
          src="/src/assets/sofa.jpg"
          alt="Small 2"
          className="w-full h-1/2 object-cover rounded-lg"
        />
      </div>
    </div>
    );
};

export default Error;
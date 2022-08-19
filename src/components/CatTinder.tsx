const CatTinder = () => {
  return (
    <div className="inline-flex">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => console.log("You have chosen CAT 1!!!")}
      >
        Cat 1
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => console.log("You have chosen CAT 2!!!")}
      >
        Cat 2
      </button>
    </div>
  );

  // return (
  //   <div className="container mt-3">
  //     <h1>Welcome, friend!</h1>
  //     {isLoading && <div>Loading...</div>}
  //     {!isLoading && <img src={catUrl} alt="cat" />}
  //   </div>
  // );
};

export {};

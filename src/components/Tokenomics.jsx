import React from "react";

const Tokenomics = () => {
  return (
    <div>
      <div className="main w-[61rem] border-2 p-6 rounded-lg">
        <div className="Section-A font-semibold text-3xl my-4">Tokenomics</div>
        <div className="Section-B">
          <h1 className="text-xl font-semibold mb-4">Initial Distribution</h1>
          <div className="flex gap-4  items-center">
            <div className="image min-w-48 max-w-48 m-4">
              <img src="/graph-initialdistribution.png" alt="not found" />
            </div>
            <div className="category flex flex-col gap-4 ml-4">
              <div className="flex gap-2 items-center">
                <div className=" h-4 w-4 bg-blue-500 rounded-[50%]"></div>
                <div className="text-xl">Crowdsale investors: 80%</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className=" h-4 w-4 bg-orange-400 rounded-[50%]"></div>
                <div className="text-xl">Foundation: 20%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Section-C my-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            laborum a assumenda, similique nulla porro ipsa dolore, voluptas
            unde at minus vero fugiat quia rerum itaque autem repudiandae ut!
            Esse ipsa, dolorum soluta sed iste officiis molestiae, autem vero
            qui, facilis nemo omnis officia placeat?Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Assumenda cumque ullam nulla. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur
            a architecto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

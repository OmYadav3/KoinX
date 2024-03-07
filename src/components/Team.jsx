import React from "react";

const Team = () => {
  return (
    <div className='bg-white' id='team'>
      <div className="main border-4 xs:my-8 rounded-lg lg:w-[60rem] xs:p-6 p-2">
        <div className="section-A text-3xl font-semibold ">Team</div>
        <div className="section-B my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          aut incidunt eum vitae ea molestiae repellendus placeat, praesentium
          beatae a maiores at alias?
        </div>
        <div className="section-C flex flex-col gap-6 ">
          <div className="card flex xs:flex-row flex-col bg-blue-50 items-center xs:gap-8 rounded-lg">
            <div className="image m-4">
              <div className="logo  ">
                <img
                  className=" mx-4 rounded-lg min-w-24 max-w-24"
                  src="/JohnSmith.png"
                  alt="not Found"
                />
                <div className="name font-bold text-center">John Smith</div>
                <div className="Designation text-sm text-center text-gray-500">
                  Designation here
                </div>
              </div>
            </div>
            <div className="details text-sm p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                ex perferendis hic quaerat ipsam illum itaque, incidunt ducimus
                sequi omnis nostrum recusandae laudantium adipisci amet?
                Molestiae doloremque, voluptatem eligendi in, sunt eveniet
                recusandae quaerat, culpa esse amet suscipit accusamus ut est
                Molestiae doloremque, voluptatem eligendi in, sunt eveniet
                recusandae quaerat, culpa esse amet suscipit accusamus ut est
               
              </p>
            </div>
          </div>
          <div className="card flex xs:flex-row flex-col bg-blue-50 items-center xs:gap-8 rounded-lg">
            <div className="image m-4">
              <div className="logo  ">
                <img
                  className=" mx-4 rounded-lg min-w-24 max-w-24"
                  src="/elinawilliams.png"
                  alt="not Found"
                />
                <div className="name font-bold text-center">Elina Williams</div>
                <div className="Designation text-sm text-center text-gray-500">
                  Designation here
                </div>
              </div>
            </div>
            <div className="details text-sm p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                ex perferendis hic quaerat ipsam illum itaque, incidunt ducimus
                sequi omnis nostrum recusandae laudantium adipisci amet?
                Molestiae doloremque, voluptatem eligendi in, sunt eveniet
                recusandae quaerat, culpa esse amet suscipit accusamus ut est
                Molestiae doloremque, voluptatem eligendi in, sunt eveniet
                recusandae quaerat, culpa esse amet suscipit accusamus ut est
               
              </p>
            </div>
          </div>
          <div className="card flex xs:flex-row flex-col bg-blue-50 items-center xs:gap-8 rounded-lg mb-4 ">
            <div className="image m-4">
              <div className="logo ">
                <img
                  className=" mx-4 rounded-lg min-w-24 max-w-24"
                  src="/johnsmith2.png"
                  alt="not Found"
                />
                <div className="name font-bold text-center">John Smith</div>
                <div className="Designation text-sm text-center text-gray-500">
                  Designation here
                </div>
              </div>
            </div>
            <div className="details text-sm p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                ex perferendis hic quaerat ipsam illum itaque, incidunt ducimus
                sequi omnis nostrum recusandae laudantium adipisci amet?
                Molestiae doloremque, voluptatem eligendi in, sunt eveniet
                recusandae quaerat, culpa esse amet suscipit accusamus ut est
                Molestiae doloremque, voluptatem eligendi in, sunt eveniet
                recusandae quaerat, culpa esse amet suscipit accusamus ut est
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

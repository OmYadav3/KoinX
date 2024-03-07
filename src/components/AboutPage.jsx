import { faArrowRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutPage = () => {
  return (
    <div className='bg-white' id='about'>
      <div className="main xs:p-6 p-2 border-2 lg:w-[60rem] rounded-lg">
        <div className="section-A text-3xl my-4 font-semibold">
          About Bitcoin
        </div>

        <div className="section-B">
          <h1 className="Heading text-xl font-semibold ">What is Bitcoin?</h1>
          <p className="Desc my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            mollitia laborum excepturi ratione, quis consectetur eligendi
            voluptatum sequi dignissimos in quo animi itaque nobis incidunt
            quos. Veritatis, odit adipisci molestias illum delectus quas iure
            officiis repudiandae, nobis.
          </p>
        </div>

        <hr className="h-4 m-2" />

        <div className="section-C">
          <h1 className="Heading text-xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="Desc my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus fugit sequi alias reprehenderit ex error libero
            dolores, rem quas fuga, consequuntur voluptatum omnis explicabo
            deserunt exercitationem nesciunt maiores animi magnam ipsam. Quidem
            qui magni est ipsum placeat sint itaque eveniet, nihil, provident,
            illo rerum illum. Sed voluptas eligendi tenetur nemo sit? Ipsam
            blanditiis consequatur laborum!
          </p>
          <p className="Desc my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus fugit sequi alias reprehenderit ex error libero
            dolores, rem quas fuga, consequuntur voluptatum omnis explicabo
            deserunt exercitationem nesciunt maiores animi magnam ipsam. Quidem
            qui magni est ipsum placeat sint itaque eveniet, nihil, provident,
            illo rerum illum. Sed voluptas eligendi tenetur nemo sit? Ipsam
            blanditiis consequatur laborum!
          </p>
          <p className=" Desc my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus fugit sequi alias reprehenderit ex error libero
            dolores, rem quas fuga, consequuntur voluptatum omnis explicabo
            deserunt exercitationem nesciunt maiores animi magnam ipsam.
          </p>
        </div>

        <hr className="h-2 mx-2" />

        <div className="section-D h-max">
          <h1 className="text-xl font-semibold mb-2 ">Already Holding Bitcoin?</h1>
          <div className="flex flex-col sm:flex-row border-2 xs:gap-4 xs:h-max ">
            <div className="card1 bg-gradient-to-r from-green-400 to-blue-400 border-2 rounded-lg  flex items-center xs:p-4">
              <div className="logo min-w-10 xs:max-w-40 max-w-32 p-2">
                <img
                  className="rounded-lg"
                  src="/illusration-handwithphone.png"
                  alt="#"
                />
              </div>
              <div className="xs:ml-4 ml-2">
                <div className="xs:text-3xl text-lg font-semibold xs:pb-4 pb-2 text-white">
                  Calculate your Profits{" "}
                </div>
                <div>
                  <button className="py-2 xs:px-4 px-2 text-xs border-2 rounded-lg font-semibold bg-white">
                    Check Now{" "}
                    <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>

            <div className="card2 border-2 flex items-center rounded-lg xs:p-4 bg-gradient-to-r from-orange-400 to-red-600">
              <div className="logo min-w-10 xs:max-w-40 max-w-32  p-2">
                <img
                  className="rounded-lg"
                  src="/illustration-phonewithinvestment.png"
                  alt="#"
                />
              </div>
              <div className="xs:ml-4 ml-2">
                <div className="xs:text-3xl text-lg font-semibold xs:pb-4 pb-2 text-white">
                  Calculate your Profits{" "}
                </div>
                <div>
                  <button className="py-2 xs:px-4 px-2 text-xs border-2 rounded-lg font-semibold bg-white">
                    Check Now{" "}
                    <FontAwesomeIcon className="ml-2" icon={faArrowRight} />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-2 m-2" />

        <div className="section-E text-sm ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            temporibus itaque. Voluptatem modi, vero veniam delectus ad aliquam
            fuga? Earum, labore sapiente libero nam alias consequatur optio
            corporis non nesciunt iure itaque iusto ipsam assumenda sed nemo
            quidem praesentium. Ipsam esse suscipit nam labore nisi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

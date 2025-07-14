export default function Home() {
  return (
    <>
      <div className="md:w-4xl bg-pink-200/50 ml-auto mr-auto p-2 rounded-2xl my-4">
        <div className="grid grid-cols-2 p-4 items-center gap-5">
          <div className="ml-auto mr-auto ">
            <img src="/images/pic3.jpg" alt="" className="h-auto md:w-auto  md:h-96 rounded-2xl" />
          </div>
          <div className="text-center  text-[0.8rem]">
            <div className="font-satisfy text-3xl">
              <h1>Alysa Loraine Alinea, RN</h1>
            </div>

            <div className="font-barlow md:text-[1.2rem] flex flex-col gap-12 ">
              <p>
                This website portrays the progress, learning experiences and
                professional growth I have accomplished while obtaining my
                Bachelor's in Science Nursing degree from Our Lady of Fatima
                University Antipolo
              </p>

              <blockquote>
                “Continuous learning is the minimum requirement for success in
                any field.” - <span className="font-bold"> Brian Tracy</span> 
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

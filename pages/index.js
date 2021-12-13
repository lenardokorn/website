import ModelViewer from '../components/model-viewer';

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-full md:items-center md:justify-center">
        <div className="flex-grow">
          <h1>Hi, I'm Lenard!</h1>
          <p className="text-xl font-light">I write code sometimes.</p>
          <ul>
            <li>Student at HTBLA Kaindorf</li>
            <li>Nerd</li>
          </ul>
        </div>
        <div className="flex-shrink-0 self-center">
          <div className="max-w-full w-[300px] lg:w-[600px]">
            <ModelViewer modelPath="/dog.glb" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

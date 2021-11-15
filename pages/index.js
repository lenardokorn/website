import ModelViewer from '../components/model-viewer';

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] justify-center items-center text-2xl">
      <ModelViewer modelPath="/dog.glb" w={600} h={400} />
    </div>
  );
}

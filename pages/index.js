import Model from '../components/Model';

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] justify-center items-center text-2xl">
      <Model modelPath="/dog.glb" w={600} h={400} />
    </div>
  );
}

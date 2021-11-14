import dynamic from 'next/dynamic';

const Model = dynamic(
  () => {
    return import('../components/Model');
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] justify-center items-center text-2xl">
      <Model modelPath="/dog.glb" />
    </div>
  );
}

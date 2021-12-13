import Image from 'next/image';

export default function School() {
  return (
    <>
      <h1>School</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolores
        saepe fuga magni ratione autem officiis id, quas earum, enim ut! Maiores
        delectus quisquam error eum, mollitia qui, magni necessitatibus dicta
        omnis impedit temporibus, explicabo quaerat veritatis ab ipsum
        cupiditate sed maxime perspiciatis illo quia tempore dolorum dolor?
        Officiis, rem!
      </p>
      <Image
        src="/images/SuitImage.jpg"
        alt="suit image"
        width={500}
        height={500}
        className="rounded-lg"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
        voluptatum.
      </p>
    </>
  );
}

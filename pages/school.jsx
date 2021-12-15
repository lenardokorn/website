import Link from 'next/link';
import { school2ndGrade } from '../lib/school-2nd-grade';

export default function School() {
  return (
    <>
      <h1>School</h1>
      <ul>
        {school2ndGrade.map(({ title, icon, description, href }) => (
          <li key={href}>
            <Link href={'/school/2nd-grade/' + href}>
              <a>
                <>
                  <span className="inline-block">{icon}</span>
                  {title}
                </>
              </a>
            </Link>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

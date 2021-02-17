/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

export default function TitleAndButton({ link, title, label }) {
  return (
    <div>
      <p className="text-center">
        <strong>{title}</strong>
      </p>
      <Link href={link}>
        <a>
          <strong>{label}</strong>
        </a>
      </Link>
      <style jsx>
        {`
          p {
            font-size: 2rem;
          }
          a {
            background-color: #2e3a52;
            color: #fff;
            padding: 20px;
            font-size: 1.84rem;
            width: 300px;
            display: block;
            text-align: center;
            transition: ease-in 0.2s;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1em;
          }

          div a:hover {
            cursor: pointer;
            color: #fff;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          }
        `}
      </style>
    </div>
  );
}

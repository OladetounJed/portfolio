import styled from "styled-components";
import Image from "next/image";

const ImageContainer = styled.div`
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    top: 0;
    left: 0;
  }
`;

export default function projectCard(props) {
  return (
    <div className="mb-16 w-full sm:w-154 sm:mb-32">
      <div className="rounded-t-2xl rounded-b-3xl bg-blue opacity-60 border border-deepBlue hover:opacity-100 transition-all duration-700">
        <ImageContainer className="relative h-80 rounded-t-2xl rounded-b-3xl">
          <Image
            className="h-96 object-cover relative rounded-t-2xl rounded-b-3xl w-full h-full"
            src={props.project.image}
            alt={props.project.name}
            layout="fill"
          />
        </ImageContainer>
        <div className="px-4 py-8">
          <h3 className="font-bold text-2xl">{props.project.name}</h3>
          <p className="font-thin text-xs my-2">{props.project.short_desc}</p>
          <a
            className="uppercase text-trueGray font-bold text-sm"
            target="_blank"
            rel="noreferrer"
            href={props.project.url}
          >
            <span className="underline">Visit the</span> Website
          </a>
        </div>
      </div>
    </div>
  );
}

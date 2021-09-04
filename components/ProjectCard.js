import styled from "styled-components";
import Image from "next/image";
import "twin.macro"

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
    <div tw="mb-16 w-full sm:w-154 sm:mb-32">
      <div tw="rounded-t-2xl rounded-b-3xl bg-blue opacity-60 border border-deepBlue hover:opacity-100 transition-all duration-700">
        <ImageContainer tw="relative h-80 rounded-t-2xl rounded-b-3xl">
          <Image
            tw="h-96 object-cover relative rounded-t-2xl rounded-b-3xl w-full h-full"
            src={props.project.image}
            alt={props.project.name}
            layout="fill"
          />
        </ImageContainer>
        <div tw="px-4 py-8">
          <h3 tw="font-bold text-2xl">{props.project.name}</h3>
          <p tw="font-thin text-xs my-2">{props.project.short_desc}</p>
          <a
            tw="uppercase text-trueGray font-bold text-sm"
            target="_blank"
            rel="noreferrer"
            href={props.project.url}
          >
            <span tw="underline">Visit the</span> Website
          </a>
        </div>
      </div>
    </div>
  );
}

import styled from "styled-components";
import 'twin.macro'


const HeaderWrapper = styled.div`
  background: rgba(42, 43, 56, 0.5);
  border: 0.2rem solid #2a2b37;
  backdrop-filter: blur(200px);
`;

export default function appHeader() {
  return (
    <div tw="w-full flex justify-center items-center pt-16 text-coolGray">
      <HeaderWrapper tw="flex py-6 px-8 top-6 justify-center items-center backdrop-opacity-50  border rounded-lg border-black w-2/3 sm:w-1/3 lg:w-1/4 sm:py-6 sm:px-16">
        <p tw="text-sm font-bold sm:text-lg">Oladetoun Temi.</p>
      </HeaderWrapper>
    </div>
  );
}

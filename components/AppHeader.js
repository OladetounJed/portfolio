import styled from "styled-components";


const HeaderWrapper = styled.div`
  background: rgba(42, 43, 56, 0.5);
  border: 0.2rem solid #2a2b37;
  backdrop-filter: blur(200px);
`;

export default function appHeader() {
  return (
    <div className="w-full flex justify-center items-center pt-16 text-coolGray">
      <HeaderWrapper className="flex py-6 px-8 top-6 justify-center items-center backdrop backdrop-opacity-50 bg-trueGray border rounded-lg border-black w-2/3 sm:w-1/2 lg:w-1/4 sm:py-6 sm:px-16">
        <p className="text-sm font-bold sm:text-lg">Oladetoun Temi.</p>
      </HeaderWrapper>
    </div>
  );
}

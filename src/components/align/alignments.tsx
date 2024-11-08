import React, { HTMLAttributes } from "react";
import styled from "styled-components";

type AlignProps = {
  children: React.ReactNode;
  to?: "start" | "center" | "between" | "end";
} & HTMLAttributes<HTMLDivElement>;

const Aligner = styled.div<{
  $direction: string;
  $alignItems: string;
  $justifyContent: string;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  width: 100%;
  height: 100%;
`;

export const Row = ({ children, to }: AlignProps) => {
  const alignValue = to !== "center" ? `flex-${to}` : to;
  return (
    <Aligner
      $direction="row"
      $alignItems={alignValue}
      $justifyContent={alignValue}
    >
      {children}
    </Aligner>
  );
};

export const Column = ({ children, to }: AlignProps) => {
  const alignValue = to !== "center" ? `flex-${to}` : to;
  return (
    <Aligner
      $direction="column"
      $alignItems={alignValue}
      $justifyContent={alignValue}
    >
      {children}
    </Aligner>
  );
};

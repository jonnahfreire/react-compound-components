import React, { HTMLAttributes } from "react";
import styled from "styled-components";

type PaddingProps = {
  children: React.ReactNode;
  value?: number;
} & HTMLAttributes<HTMLDivElement>;

const StyledPaddingAll = styled.div<{
  $padding: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $padding }) => $padding};
`;

const StyledPaddingTop = styled(StyledPaddingAll)`
  padding: ${({ $padding }) => `${$padding} 0px 0px 0px`};
`;

const StyledPaddingLeft = styled(StyledPaddingAll)`
  padding: ${({ $padding }) => `0px 0px 0px ${$padding}`};
`;

const StyledPaddingRight = styled(StyledPaddingAll)`
  padding: ${({ $padding }) => `0px ${$padding} 0px 0px`};
`;

const StyledPaddingBottom = styled(StyledPaddingAll)`
  padding: ${({ $padding }) => `0px  0px ${$padding} 0px`};
`;

const StyledPaddingOnly = styled.div<{
  $t?: string;
  $l?: string;
  $r?: string;
  $b?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $t, $r, $b, $l }) => `${$t} ${$r} ${$b} ${$l}`};
`;

export const All = ({ children, value }: PaddingProps) => {
  const paddingValue = value ? `${value}px` : "0px";
  return (
    <StyledPaddingAll $padding={paddingValue}>{children}</StyledPaddingAll>
  );
};

export const Top = ({ children, value }: PaddingProps) => {
  const paddingValue = value ? `${value}px` : "0px";
  return (
    <StyledPaddingTop $padding={paddingValue}>{children}</StyledPaddingTop>
  );
};
export const Left = ({ children, value }: PaddingProps) => {
  const paddingValue = value ? `${value}px` : "0px";
  return (
    <StyledPaddingLeft $padding={paddingValue}>{children}</StyledPaddingLeft>
  );
};

export const Right = ({ children, value }: PaddingProps) => {
  const paddingValue = value ? `${value}px` : "0px";
  return (
    <StyledPaddingRight $padding={paddingValue}>{children}</StyledPaddingRight>
  );
};

export const Bottom = ({ children, value }: PaddingProps) => {
  const paddingValue = value ? `${value}px` : "0px";
  return (
    <StyledPaddingBottom $padding={paddingValue}>
      {children}
    </StyledPaddingBottom>
  );
};

type PaddingOnlyProps = {
  children: React.ReactNode;
  only?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
} & React.HTMLAttributes<HTMLDivElement>;

export const Only = ({ children, only }: PaddingOnlyProps) => {
  const top = only?.top ? `${only.top}px` : "0px";
  const left = only?.left ? `${only.left}px` : "0px";
  const right = only?.right ? `${only.right}px` : "0px";
  const bottom = only?.bottom ? `${only.bottom}px` : "0px";

  return (
    <StyledPaddingOnly $t={top} $r={right} $b={bottom} $l={left}>
      {children}
    </StyledPaddingOnly>
  );
};

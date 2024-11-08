import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import styled from "styled-components";
import { Alignment } from "../align";

const ModalBackground = styled.div<{ $show: boolean }>`
  flex: 1;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ $show }) => ($show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 10000000;
`;

const StyledBody = styled.div<{
  $background?: string;
  $h?: string;
  $w?: string;
  $rounded?: boolean;
  $elevated?: boolean;
}>`
  height: ${({ $h }) => $h ?? "60%"};
  width: ${({ $w }) => $w ?? "70%"};
  background-color: ${({ $background }) => $background ?? "#FFFFFF"};
  box-shadow: ${({ $elevated }) =>
    $elevated ? "0px 5px 5px 1px rgba(0,0,0,.1)" : "none"};
  border-radius: ${({ $rounded }) => ($rounded ? "15px" : "0px")};
`;

type ModalRootProps = {
  children: React.ReactNode;
  isOpen: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const ModalRoot = ({ children, isOpen, ...rest }: ModalRootProps) => {
  return (
    <ModalBackground $show={isOpen} {...rest}>
      {children}
    </ModalBackground>
  );
};

type ModalBodyProps = {
  children: React.ReactNode;
  bg?: string;
  size?: { h?: string; w?: string };
  rounded?: boolean;
  elevated?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const ModalBody = ({
  children,
  bg,
  size,
  rounded,
  elevated,
  ...rest
}: ModalBodyProps) => {
  return (
    <StyledBody
      $background={bg}
      $h={size?.h}
      $w={size?.w}
      $rounded={rounded}
      $elevated={elevated}
      {...rest}
    >
      {children}
    </StyledBody>
  );
};

type ModalHeaderProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const ModalHeader = ({ children, ...rest }: ModalHeaderProps) => {
  return (
    <Alignment.Row to="between" {...rest}>
      {children}
    </Alignment.Row>
  );
};

type ModalTitleProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
} & HTMLAttributes<HTMLHeadingElement>;

export const ModalTitle = ({ children, size, ...rest }: ModalTitleProps) => {
  switch (size) {
    case "small":
      return <h5 {...rest}>{children}</h5>;
    case "medium":
      return <h3 {...rest}>{children}</h3>;
    case "large":
      return <h1 {...rest}>{children}</h1>;
    default:
      return <h3 {...rest}>{children}</h3>;
  }
};

type ModalSubtitleProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export const ModalSubtitle = ({ children, ...rest }: ModalSubtitleProps) => {
  return <span {...rest}>{children}</span>;
};

type ModalContentProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const ModalContent = ({ children, ...rest }: ModalContentProps) => {
  return <div {...rest}>{children}</div>;
};

type ModalActionsProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const ModalActions = ({ children, ...rest }: ModalActionsProps) => {
  return <div {...rest}>{children}</div>;
};

type ModalActionProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ModalAction = ({
  children,
  onClick,
  ...rest
}: ModalActionProps) => {
  return (
    <button {...rest} onClick={onClick}>
      {children}
    </button>
  );
};

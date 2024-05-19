import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { darken, rgba } from 'polished';
import { color, typography } from '../shared/styles';
import { easing } from '../shared/animation';

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

const APPEARANCES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TEXT: 'text',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const StyledButton = styled.button`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${(props) =>
    props.size === SIZES.LARGE
      ? '18px 24px'
      : props.size === SIZES.MEDIUM
      ? '13px 20px'
      : '8px 16px'};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;

  font-size: ${(props) =>
    props.size === SIZES.LARGE
      ? typography.size.s3
      : props.size === SIZES.MEDIUM
      ? typography.size.s2
      : typography.size.s1}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 1;
  ${(props) =>
    !props.isLoading &&
    `
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }

      &:active {
        transform: translate3d(0, 0, 0);
      }

      &:focus {
        box-shadow: ${rgba(props.color || color.primary, 0.4)} 0 1px 9px 2px;
      }

      &:focus:hover {
        box-shadow: ${rgba(props.color || color.primary, 0.2)} 0 8px 18px 0px;
      }
    `}

  ${Text} {
    transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
    transition: transform 700ms ${easing.rubber};
    opacity: 1;
  }

  ${Loading} {
    transform: translate3d(0, 100%, 0);
  }

  svg {
    height: ${(props) =>
      props.size === SIZES.LARGE
        ? '18'
        : props.size === SIZES.MEDIUM
        ? '16'
        : '14'}px;
    width: ${(props) =>
      props.size === SIZES.LARGE
        ? '18'
        : props.size === SIZES.MEDIUM
        ? '16'
        : '14'}px;
    vertical-align: top;
    margin-right: ${(props) =>
      props.size === SIZES.LARGE
        ? '8'
        : props.size === SIZES.MEDIUM
        ? '6'
        : '4'}px;
    margin-top: ${(props) =>
      props.size === SIZES.LARGE
        ? '-3'
        : props.size === SIZES.MEDIUM
        ? '-2'
        : '-1'}px;
    margin-bottom: ${(props) =>
      props.size === SIZES.LARGE
        ? '-3'
        : props.size === SIZES.MEDIUM
        ? '-2'
        : '-1'}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.isUnclickable &&
    `
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.isLoading &&
    `
      cursor: progress !important;
      opacity: 0.7;

      ${Loading} {
        transition: transform 700ms ${easing.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${Text} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${
        props.size === SIZES.LARGE
          ? '15'
          : props.size === SIZES.MEDIUM
          ? '12'
          : '7'
      }px;
    `}

    
  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
      background: ${color.primary};
      color: ${props.color || color.lightest};

      ${
        !props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, color.primary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.SECONDARY &&
    `
    box-shadow: ${color.secondary} 0 0 0 1px inset;
    color: ${props.color || color.secondary};

    &:hover {
      box-shadow: ${color.secondary} 0 0 0 1px inset;
      background: transparent;
    }

    &:active {
      background: ${color.secondary};
      box-shadow: ${color.secondary} 0 0 0 1px inset;
      color: ${color.lightest};
    }
    &:focus {
      box-shadow: ${color.secondary} 0 0 0 1px inset,
        ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
    }
    &:focus:hover {
      box-shadow: ${color.secondary} 0 0 0 1px inset,
        ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
    }

      ${
        !props.isLoading &&
        `
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
          }
        `
      }
    `}
    ${(props) =>
    props.appearance === APPEARANCES.TEXT &&
    `
    color: ${props.color || color.darker};

    &:hover {
      text-decoration: underline;
    }

    ${
      !props.isLoading &&
      `
      &:active {
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
      }
      &:focus {
        box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
      }
      &:focus:hover {
        box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
      }
      `
    }
          `}
`;

const ButtonLink = styled.a``;

export const Button = forwardRef(function Button(
  {
    isDisabled,
    isLoading,
    loadingText,
    isLink,
    children,
    ButtonWrapper,
    ...props
  },
  ref,
) {
  if (ButtonWrapper) {
    return (
      <StyledButton
        as={ButtonWrapper}
        disabled={isDisabled}
        isLoading={isLoading}
        {...props}
        ref={ref}
      >
        <>
          <Text>{children}</Text>
          {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
        </>
      </StyledButton>
    );
  }
  if (isLink) {
    return (
      <StyledButton as={ButtonLink} isLoading={isLoading} {...props} ref={ref}>
        <>
          <Text>{children}</Text>
          {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
        </>
      </StyledButton>
    );
  }
  return (
    <StyledButton
      disabled={isDisabled}
      isLoading={isLoading}
      {...props}
      ref={ref}
    >
      <>
        <Text>{children}</Text>
        {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
      </>
    </StyledButton>
  );
});

Button.propTypes = {
  /**
   * Checks if the button is in a loading state
   */
  isLoading: PropTypes.bool,
  /**
   * When a button is in the loading state you can supply custom text
   */
  loadingText: PropTypes.node,
  /**
   * Buttons that have hrefs should use <a> instead of <button>
   */
  isLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  isDisabled: PropTypes.bool,
  /**
   Prevents users from clicking on a button multiple times (for things like payment forms)
  */
  isUnclickable: PropTypes.bool,
  /**
   * Buttons with icons by themselves have a circular shape
   */
  containsIcon: PropTypes.bool,
  /*
   * Size of the button
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * A component that wraps the button
   * Can be used to add custom styles or props to the button
   */
  ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: APPEARANCES.TERTIARY,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined,
};

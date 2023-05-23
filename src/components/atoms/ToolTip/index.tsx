import { ComponentProps, FC, JSX, useId } from 'react';
import { Tooltip } from 'react-tooltip';

export type ToolTipProps = Omit<
  ComponentProps<typeof Tooltip>,
  'id' | 'render'
> & {
  render: (id: ReturnType<typeof useId>) => JSX.Element;
};

export const ToolTip: FC<ToolTipProps> = ({ render, children, ...props }) => {
  const id = useId();

  return (
    <>
      {render(id)}

      <Tooltip id={id} {...props}>
        {children}
      </Tooltip>
    </>
  );
};

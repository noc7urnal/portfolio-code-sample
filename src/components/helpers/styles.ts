import classNames from "classnames";

export const getClassNames = (styles: Record<string, string>, ...args: classNames.ArgumentArray) => (
  classNames(
    ...args.map(arg => {
      if (typeof arg === 'string') {
        return arg.split(' ').map(cls => styles[cls] || cls).join(' ');
      }
      return arg;
    })
  )
)

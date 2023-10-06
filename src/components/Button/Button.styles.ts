export const buttonStyles = {
  variant: {
    primary:
      'bg-primary border border-primary text-white disabled:bg-slate-200 disabled:border-slate-200 disabled:text-slate-500',
    secondary:
      'border border-primary/40 text-primary disabled:border-slate-300 disabled:text-slate-400 hover:bg-primary/5',
    text: 'text-primary disabled:text-slate-400 bg-transparent hover:bg-primary/5',
  },
  loading: {
    primary: 'fill-slate-500',
    secondary: 'fill-slate-400',
    text: 'fill-slate-500',
  },
  size: {
    sm: 'px-3 h-10 min-h-[2.5] text-sm',
    md: 'px-4 h-12 min-h-[3rem] text-sm',
    lg: 'px-5 h-14 min-h-[3.5rem] text-md',
  },
  theme: {
    error: {
      primary: 'bg-red-500 border-red-50 !text-white',
      secondary: 'border-red-500 !text-red-500 hover:bg-red-50',
      text: '!text-red-500 hover:bg-red-50',
    },
    simple: {
      primary: '',
      secondary: '',
      text: '',
    },
  },
  block: 'w-full',
};

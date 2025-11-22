import { ReactNode } from 'react';
import { Info as InfoIcon, AlertTriangle, Lightbulb, CheckCircle } from 'lucide-react';

type CalloutType = 'info' | 'warning' | 'tip' | 'success';

interface CalloutProps {
  type: CalloutType;
  children: ReactNode;
}

const calloutConfig = {
  info: {
    icon: InfoIcon,
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    borderColor: 'border-blue-200 dark:border-blue-800',
    iconColor: 'text-blue-600 dark:text-blue-400',
    textColor: 'text-blue-900 dark:text-blue-100',
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    textColor: 'text-yellow-900 dark:text-yellow-100',
  },
  tip: {
    icon: Lightbulb,
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    borderColor: 'border-purple-200 dark:border-purple-800',
    iconColor: 'text-purple-600 dark:text-purple-400',
    textColor: 'text-purple-900 dark:text-purple-100',
  },
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-50 dark:bg-green-950',
    borderColor: 'border-green-200 dark:border-green-800',
    iconColor: 'text-green-600 dark:text-green-400',
    textColor: 'text-green-900 dark:text-green-100',
  },
};

export function Callout({ type, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`my-6 p-4 rounded-lg border-l-4 ${config.bgColor} ${config.borderColor}`}
    >
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconColor}`} />
        <div className={`flex-1 ${config.textColor} text-sm leading-relaxed`}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Named exports for easier usage in MDX
export function Tip({ children }: { children: ReactNode }) {
  return <Callout type="tip">{children}</Callout>;
}

export function Warning({ children }: { children: ReactNode }) {
  return <Callout type="warning">{children}</Callout>;
}

export function Info({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>;
}

export function Success({ children }: { children: ReactNode }) {
  return <Callout type="success">{children}</Callout>;
}

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
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
    textColor: 'text-blue-900',
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    iconColor: 'text-yellow-600',
    textColor: 'text-yellow-900',
  },
  tip: {
    icon: Lightbulb,
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    iconColor: 'text-purple-600',
    textColor: 'text-purple-900',
  },
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-600',
    textColor: 'text-green-900',
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

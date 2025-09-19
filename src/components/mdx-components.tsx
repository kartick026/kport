import type { MDXComponents } from 'mdx/types';
import { Callout } from '@/components/callout';
import { Metric } from '@/components/metric';
import { Figure } from '@/components/figure';
import { Code } from '@/components/code';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    Metric,
    Figure,
    Code,
  };
}

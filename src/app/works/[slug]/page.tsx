'use client';
import { useScroll } from '@/context/ScollContext';

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { scroll } = useScroll();
  return <div style={{ minHeight: '200vh' }}>{params.slug}</div>;
}

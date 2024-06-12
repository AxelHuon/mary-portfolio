'use client';

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return <div style={{ minHeight: '200vh' }}>{params.slug}</div>;
}

// page.tsx
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <figure className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg text-center">
        <div className="relative w-32 h-50 mx-auto mb-6">
          <Image
            src="/mian.jpg"
            alt="Muhammad Abdullah"
            layout="responsive"
            objectFit="cover"
            className="rounded-full"
            width={800}
            height={200}
          />
        </div>
        <blockquote>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
            "My name is Muhammad Abdullah. I am passionate about technology and always eager to explore new opportunities that allow me to grow both personally and professionally. With a strong commitment to excellence, I strive to make a positive impact in everything I undertake. Special thanks to my Teacher: Sir Asif Langra."
          </p>
        </blockquote>
        <figcaption className="mt-6">
          <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">Muhammad Abdullah</div>
          <div className="text-sm font-medium text-gray-600 dark:text-gray-300">AI Engineer / Mantech</div>
        </figcaption>
      </figure>
    </div>
  );
}

'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSection } from '../store/slices/navigationSlice';

export function useIntersectionObserver() {
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            dispatch(setCurrentSection(sectionId));
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-50px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [dispatch]);
}
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Deadfish🐟 Studying Free',
  description: 'Personal study notes collection',
  markdown: {
    math: true
  },
  themeConfig: {
    sidebar: {
      '/reinforcement-learning/': [
        {
          text: 'Reinforcement Learning',
          items: [
            { text: 'Overview', link: '/reinforcement-learning/README' },
            { text: 'Lecture 1: Intro to RL', link: '/reinforcement-learning/lecture-1' },
            { text: 'Lecture 2', link: '/reinforcement-learning/lecture-2' },
            { text: 'Lecture 3', link: '/reinforcement-learning/lecture-3' },
            { text: 'Lecture 4', link: '/reinforcement-learning/lecture-4' },
            { text: 'Lecture 5', link: '/reinforcement-learning/lecture-5' },
            { text: 'Lecture 6', link: '/reinforcement-learning/lecture-6' },
            { text: 'Lecture 7', link: '/reinforcement-learning/lecture-7' },
            { text: 'Agents', link: '/reinforcement-learning/AGENTS' },
          ]
        }
      ],
      '/principle-of-cognitive-behavioral-computing/': [
        {
          text: 'Principle of Cognitive Behavioral Computing',
          items: [
            { text: 'Lecture 1', link: '/principle-of-cognitive-behavioral-computing/lecture-1' },
            { text: 'Lecture 2', link: '/principle-of-cognitive-behavioral-computing/lecture-2' },
            { text: 'Lecture 3', link: '/principle-of-cognitive-behavioral-computing/lecture-3' },
            { text: 'Lecture 6', link: '/principle-of-cognitive-behavioral-computing/lecture-6' },
          ]
        }
      ],
      '/machine-learning-derivation/': [
        {
          text: 'Machine Learning Derivation',
          items: [
            { text: 'Variational Inference', link: '/machine-learning-derivation/variational-inference' },
            { text: 'VI Paper Related', link: '/machine-learning-derivation/variational-inference-paper-related' },
            { text: 'EM Algorithm', link: '/machine-learning-derivation/EM' },
          ]
        }
      ],
      '/hand-coded-play/': [
        {
          text: 'Hand-coded Play',
          items: [
            { text: 'BiLSTM-AE', link: '/hand-coded-play/BiLSTM-AE' },
            { text: 'Ridge Regression', link: '/hand-coded-play/Ridge-Regression' },
            { text: 'GRU', link: '/hand-coded-play/GRU' },
          ]
        }
      ]
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reinforcement Learning', link: '/reinforcement-learning/README' },
      { text: 'Cognitive Behavioral Computing', link: '/principle-of-cognitive-behavioral-computing/lecture-1' },
      { text: 'ML Derivation', link: '/machine-learning-derivation/variational-inference' },
      { text: 'Hand-coded Play', link: '/hand-coded-play/GRU' }
    ]
  }
})

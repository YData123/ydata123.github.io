<head>
  <title> Intermediate Machine Learning </title>
  <link rel="stylesheet" href="theme/css/main.css" />
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?">
</head>


<img src="./heatmap2.png" width="300" align="bottom">

Intermediate Machine Learning
===============================

S&DS 365 is a second course in machine learning at the advanced undergraduate or beginning graduate level. The course assumes familiarity with the basic ideas and techniques in machine learning, for example as covered in S&DS 265. The course treats methods together with mathematical frameworks that provide intuition and justifications for how and when the methods work. Assignments give students hands-on experience with machine learning techniques, to build the skills needed to adapt approaches to new problems. Topics include nonparametric regression and classification, kernel methods, risk bounds, nonparametric Bayesian approaches, attention and language models, generative models, sparsity and manifolds, and reinforcement learning. Programming is central to the course, and is based on the Python programming language and Jupyter notebooks.

As prerequisites, students are expected to have a background in probability and statistics, at the level of S&DS 242 (Theory of Statistics), familiarity with the core ideas from linear algebra, for example through Math 222 (Linear Algebra with Applications), and computational skills at the level of S&DS 265 (Introductory Machine Learning) or CPSC 200 (Introduction to Information Systems). Background material can be found at the
[Introductory Machine Learning](http://introml.ydata123.org) (S&DS 265) course site.


Computing for the course uses Python in Jupyter notebooks. These can be run using [Anaconda](https://www.anaconda.com/products/individual) with the [IML environment](https://raw.githubusercontent.com/YData123/sds365-sp22/main/env/IML_env.yml) that includes the packages we'll need <a href="https://raw.githubusercontent.com/YData123/sds365-sp22/main/env/IML_env.zip" download>(click here to download)</a>
; instructions for installing this environment are available on [Yale Canvas](https://canvas.yale.edu).  The notebooks can also be run in [Google Colab](https://colab.research.google.com) by clicking on the [<img width="25" src="colab.svg">](https://colab.research.google.com) icon.

Complementary readings refer to sections in the book [Probabilistic Machine Learning: An Introduction](https://probml.github.io/pml-book/book1.html), by Kevin Murphy, MIT Press, 2022 (forthcoming).

<br>

Calendar Fall 2022
---
Lectures: Monday/Wednesday 9:00-10:20


Week | Dates |  Topics | Demos & Tutorials |  Lecture Slides | Readings & Notes | Assignments & Exams
----------- | ----------- | ------------- | ------------ | ------------- | ------------- | -----------
1 | Aug 31, Sep 2 |    Course overview |  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/python/python-elements.ipynb) [Python elements](https://github.com/YData123/sds265-fa21/raw/main/demos/python/python-elements.zip)  <br>  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/covid-trends/covid-trends.ipynb) [Pandas and regression](https://github.com/YData123/sds265-fa21/raw/main/demos/covid-trends/covid-trends.zip) <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/lasso/lasso-example.ipynb) [Lasso example](https://github.com/YData123/sds365-sp22/raw/main/demos/lasso/lasso-example.zip)  | Aug 31: [Course overview](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-jan-26.pdf) <br> Sep 2: [Sparse regression](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-jan-28.pdf) | PML Section 11.4  |
2 | Sep 7 | Smoothing and kernels |  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/smoothing/smoothing-demo.ipynb) [Smoothing example](https://github.com/YData123/sds365-sp22/raw/main/demos/smoothing/smoothing-demo.zip) <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/smoothing/smoothing-demo2.ipynb) [Using different kernels](https://github.com/YData123/sds365-sp22/raw/main/demos/smoothing/smoothing-demo2.zip)  | Sep 7: [Smoothing](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-jan-31.pdf) | PML Sections 16.3, 17.1 | Sep 7: Quiz 1
3 | Sep 12, 14 | Density estimation and risk bounds  | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/mercer_kernels/mercer-kernel-demo.ipynb) [Mercer kernels](https://github.com/YData123/sds365-sp22/raw/main/demos/mercer_kernels/mercer-kernel-demo.zip) <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/smoothing/smoothing-demo3.ipynb) [Density estimation demo](https://github.com/YData123/sds365-sp22/raw/main/demos/smoothing/smoothing-demo3.zip)  | Sep 12: [Mercer Kernels](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-feb-2.pdf) <br> Sep 14: [Density estimation](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-feb-7.pdf) | <br> <img width="25" src="scream.png"> [Notes on Mercer kernels](https://github.com/YData123/sds365-sp22/raw/main/notes/mercer-kernels.pdf) <br> [Bias-variance tradeoff for density estimation](https://github.com/YData123/sds365-sp22/raw/main/notes/kernel-bias-variance.pdf) |  Sep 14: [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/assignments/assn1/assn1.ipynb) [Assn 1 out](https://github.com/YData123/sds365-sp22/raw/main/assignments/assn1/assn1.zip)
4 | Sep 19, 21 | Neural networks for classification | [TensorFlow playground](https://playground.tensorflow.org/) <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/convolution/convolve_demo.ipynb) [Convolution demo](https://github.com/YData123/sds365-sp22/raw/main/demos/convolution/convolve_demo.zip) <!-- <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/convolution/brain-food.ipynb) [Problem 4 warmup](https://github.com/YData123/sds365-sp22/raw/main/demos/convolution/brain-food.zip) --> | Sep 19: [Neural networks](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-feb-9.pdf) <br> Sep 21: [Convolutional neural networks](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-feb-14.pdf) | PML Sections 13.1, 13.2 <br> [Notes on backpropagation](https://github.com/YData123/sds265-fa21/raw/main/notes/backprop.pdf) | Sep 21: [Quiz 2](https://yale.instructure.com/courses/76095/quizzes/51447)
5 | Sep 26, 28 | Nonparametric Bayes | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/bayes/bayes.ipynb) [Parametric Bayes](https://github.com/YData123/sds265-fa21/raw/main/demos/bayes/bayes.zip) <br>  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/gaussian_processes/gp_demo.ipynb) [Gaussian processes](https://github.com/YData123/sds365-sp22/raw/main/demos/gaussian_processes/gp_demo.zip) |  Sep 26: [Gaussian processes](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-feb-21.pdf) <br> Sep 28: [Gaussian processes continued](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-feb-23.pdf)  | PML Section 17.2 <br> [Notes on Bayesian inference](https://github.com/YData123/sds265-fa21/raw/main/notes/bayes-notes.pdf) <br> [Notes on nonparametric Bayes](https://github.com/YData123/sds365-sp22/raw/main/notes/nonparametric-bayes.pdf) |  Sep 28: Assn 1 in; [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/assignments/assn2/assn2.ipynb) [Assn 2 out](https://github.com/YData123/sds365-sp22/raw/main/assignments/assn2/assn2.zip)
6 | Oct 3, 5 | Gibbs sampling and approximate inference | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/gibbs_sampling/dpm_gibbs.ipynb) [Gibbs sampling](https://github.com/YData123/sds365-sp22/raw/main/demos/gibbs_sampling/dpm_gibbs.zip) | Oct 3: [Gibbs sampling](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-mar-02.pdf) <br> Oct 5: [Introduction to approximate inference](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-mar-07.pdf)  |  [Notes on Gibbs sampling](https://github.com/YData123/sds365-sp22/raw/main/notes/dpm_gibbs.pdf) | Oct 5: [Quiz 3](https://yale.instructure.com/courses/76095/quizzes/51694)
7 | Oct 10, 12 | Variational inference | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/variational/vae_demo.ipynb) [Variational autoencoders](https://github.com/YData123/sds365-sp22/raw/main/demos/variational/vae_demo.zip) |  Oct 10: [Variational inference and VAEs](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-mar-09.pdf) <br> Oct 12: [VAEs and review](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-mar-14.pdf) <br> | PML Section 20.3 <br> [Notes on variational inference](https://github.com/YData123/sds365-sp22/raw/main/notes/variational.pdf)  | Oct 12: Assn 2 in <br>  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/assignments/assn3/assn3.ipynb) [Assn 3 out](https://github.com/YData123/sds365-sp22/raw/main/assignments/assn3/assn3.zip)
8 | Oct 17 | Midterm  | | | [Practice midterm](https://yale.instructure.com/courses/76095/files/folder/Midterm) | Oct 17: Midterm exam
9 | Oct 24, 26 | Graphs and structure learning | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/graphs/glasso_demo.ipynb) [Graphical lasso demo](https://github.com/YData123/sds365-sp22/raw/main/demos/graphs/glasso_demo.zip) <br> [Graph neural networks](https://distill.pub/2021/understanding-gnns/) | Oct 24: [Sparsity and graphs](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-mar-28.pdf) <br> Oct 26: [Discrete data and  graph neural nets](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-mar-30.pdf) |  [Notes on graphs and structure learning](https://github.com/YData123/sds365-sp22/raw/main/notes/graphs.pdf) <br> PML Section 23.4 |
10 | Oct 31, Nov 2 | Deep reinforcement learning | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/q_learning/qlearning_demo.ipynb) [Q-learning demo](https://github.com/YData123/sds365-sp22/raw/main/demos/q_learning/qlearning_demo.zip) |  Oct 31: [Reinforcement learning](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-4.pdf) <br> Nov 2: [Deep reinforcement learning](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-6.pdf) | Sutton and Barto, Section 6.5 | Nov 2: Assn 3 in <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/assignments/assn4/assn4.ipynb) [Assn 4 out](https://github.com/YData123/sds365-sp22/raw/main/assignments/assn4/assn4.zip)
11 | Nov 7, 9 | Policy gradient methods |  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/dqn_demo/dqn_demo.ipynb) [DQN demo](https://github.com/YData123/sds365-sp22/raw/main/demos/dqn_demo/dqn_demo.zip) <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/policy_gradients_demo/policy_gradients_demo.ipynb) [Policy gradients demo](https://github.com/YData123/sds365-sp22/raw/main/demos/policy_gradients_demo/policy_gradients_demo.zip) <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/actor_critic/actor_critic_demo.ipynb) [Actor-critic demo](https://github.com/YData123/sds365-sp22/raw/main/demos/actor_critic/actor_critic_demo.zip) | Nov 7: [Policy gradient methods](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-11.pdf) <br> Nov 9: [Actor-critic methods](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-13.pdf) | Sutton and Barto, Section 13.1-13.3, 13.5 | Nov 9: Quiz 4 
12 | Nov 14, 16 | Sequential and sequence-to-sequence  models | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/rnn_demo/rnn-demo.ipynb) [RNN demo: Fakespeare](https://github.com/YData123/sds365-sp22/raw/main/demos/rnn_demo/rnn-demo.zip) <br> [TensorFlow: Text generation](https://www.tensorflow.org/text/tutorials/text_generation)  | Nov 14: [HMMs and RNNs](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-18.pdf) <br> Nov 16: [RNNs, GRUs, LSTMs, and all that](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-20.pdf)| PML Chapter 15 | Nov 16: Assn 4 in <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/assignments/assn5/assn5.ipynb) [Assn 5 out](https://github.com/YData123/sds365-sp22/raw/main/assignments/assn5/assn5.zip)
13 | Nov 21, 23 | No class, Thanksgiving break | <!--[<img width="25" src="colab.svg">]()--> |  |
14 | Nov 28, 30 | Attention and language models |  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/gpt-3/hello_gpt3.ipynb) [GPT-3 demo](https://github.com/YData123/sds365-sp22/raw/main/demos/gpt-3/hello_gpt3.zip) <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/gpt-3/hello_codex.ipynb) [Codex demo](https://github.com/YData123/sds365-sp22/raw/main/demos/gpt-3/hello_codex.zip) |  Nov 28: [Sequence-to-sequence models and attention](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-25.pdf) <br> Nov 30: [Course wrap up](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-27.pdf) | PML Sections 15.4, 15.5 | Nov 30: Quiz 5
15 | Dec 5, 7 | Transformers |  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/gpt-3/hello_gpt3.ipynb) [GPT-3 demo](https://github.com/YData123/sds365-sp22/raw/main/demos/gpt-3/hello_gpt3.zip) <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds365-sp22/blob/master/demos/gpt-3/hello_codex.ipynb) [Codex demo](https://github.com/YData123/sds365-sp22/raw/main/demos/gpt-3/hello_codex.zip) |  Dec 5: [Sequence-to-sequence models and attention](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-25.pdf) <br> Dec 7: [Course wrap up](https://github.com/YData123/sds365-sp22/raw/main/lectures/lecture-apr-27.pdf) | PML Sections 15.4, 15.5 | Dec 7: Assn 5 in
   | TBD  | Final exam | | | | [Practice final](https://yale.instructure.com/courses/76095/files/folder/Final) <br> [Registrar: final exam schedule](https://registrar.yale.edu/general-information/final-exams/)


<div class="classMap">
</div>
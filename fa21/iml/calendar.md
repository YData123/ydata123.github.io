<head>
  <title> Introductory Machine Learning </title>
  <link rel="stylesheet" href="theme/css/main.css" />
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?">
</head>


![neuro-datascience](./data-neuroscience.jpg)


Introductory Machine Learning
====

S&DS 265 introduces some of the key ideas and techniques in machine learning. Algorithms and concepts are presented to build intuition for how different methods work, without advanced mathematics. Assignments give students hands-on experience with the methods on different types of data. Topics include linear regression and classification, tree-based methods, topic models, language models, word embeddings, two-layer and recurrent neural networks, reinforcement learning, and an introduction to deep learning. Examples come from a variety of sources including political speeches, archives of scientific articles, real estate listings, and natural images. Programming is central to the course, and is based on the Python programming language and Jupyter notebooks.

Computing for the course uses Python in Jupyter notebooks. These can be run using [Anaconda](https://www.anaconda.com/products/individual) with the [iML environment](https://raw.githubusercontent.com/YData123/sds265-fa21/main/env/iml_env.yml) adopted by the course <a href="https://raw.githubusercontent.com/YData123/sds265-fa21/main/env/iml_env.zip" download>(click here to download)</a>
; instructions for installing this environment are available on [Yale Canvas](https://canvas.yale.edu).  The notebooks can also be run in [Google Colab](https://colab.research.google.com).

Calendar Fall 2021
---
Lectures: Tuesday/Thursday 9:00-10:20


 Week | Dates |  Topics | Demos | Assignments & Exams | Slides and Readings
----------- | ----------- | ------------- | ------------ | ------------- | -----------
1 | Sept 2 |     Course overview | || [Sept 2: Course overview](https://github.com/YData123/sds265-fa21/raw/main/lectures/lecture-sept-02.pdf)
2 | Sept 7, 9 |    Python and background concepts |  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/python/python-elements.ipynb) [Python elements](https://github.com/YData123/sds265-fa21/raw/main/demos/python/python-elements.zip)  <br>  [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/covid-trends/covid-trends.ipynb) [Covid trends](https://github.com/YData123/sds265-fa21/raw/main/demos/covid-trends/covid-trends.zip) <br> | Thu: Quiz 0 | [Data8 Chapters 3](https://www.inferentialthinking.com/chapters/03/programming-in-python.html), [4](https://www.inferentialthinking.com/chapters/04/Data_Types.html), [5](https://www.inferentialthinking.com/chapters/05/Sequences.html) <br> [Sept 7: Python elements](https://github.com/YData123/sds265-fa21/raw/main/lectures/lecture-sept-07.pdf) <br> [Sept 9: Pandas and linear regression](https://github.com/YData123/sds265-fa21/raw/main/lectures/lecture-sept-09.pdf)
3 | Sept 14, 16 | Linear regression and classification | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/covid-trends/covid-trends-revisited.ipynb) [Covid trends (revisited)](https://github.com/YData123/sds265-fa21/raw/main/demos/covid-trends/covid-trends-revisited.zip)  <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/classification/classification.ipynb) [Classification examples](https://github.com/YData123/sds265-fa21/raw/main/demos/classification/classification.zip)  |  Tue: [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/assignments/assn1/assn1.ipynb) [Assn1 out](https://github.com/YData123/sds265-fa21/raw/main/assignments/assn1/assn1.zip)  | [Sept 14: Regression concepts](https://github.com/YData123/sds265-fa21/raw/main/lectures/lecture-sept-14.pdf) <br> [Sept 16: Classification](https://github.com/YData123/sds265-fa21/raw/main/lectures/lecture-sept-16.pdf)
4 | Sept 21, 23 | Stochastic gradient descent | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/sgd/sgd.ipynb) [SGD examples](https://github.com/YData123/sds265-fa21/raw/main/demos/sgd/sgd.zip)  |  Tue: Quiz 1 <br> Thu: Assn 1 in; Assn 2 out |
5 | Sept 28, 30 | Bias and variance, cross-validation | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/bias-variance/bias-variance.ipynb) [Bias-variance tradeoff](https://github.com/YData123/sds265-fa21/raw/main/demos/bias-variance/bias-variance.zip)  |  |
6 | Oct 5, 7 | Tree-based methods | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/trees/trees.ipynb) [Trees and forests](https://github.com/YData123/sds265-fa21/raw/main/demos/trees/trees.zip)  |  Tue: Assn 2 in; Assn 3 out |
7 | Oct 12, 14 | PCA and dimension reduction | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/pca/pca.ipynb) [PCA examples](https://github.com/YData123/sds265-fa21/raw/main/demos/pca/pca.zip)  |  Tue: Quiz 2 <br> Thu: Assn 3 in; Assn 4 out |
8 | Oct 19 |  Midterm exam (in class) |  |   |
9 | Oct 26, 28 | Language models, word embeddings | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/embeddings/embeddings.ipynb) [Word embeddings](https://github.com/YData123/sds265-fa21/raw/main/demos/embeddings/embeddings.zip) |  |
10 | Nov 2, 4 | Bayesian inference, topic models | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/bayes/bayes.ipynb) [Bayesian inference](https://github.com/YData123/sds265-fa21/raw/main/demos/bayes/bayes.zip) <br> [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/topic-models/topic-models.ipynb) [Topic models](https://github.com/YData123/sds265-fa21/raw/main/demos/topic-models/topic-models.zip)  |   Tue: Assn 4 in; Assn 5 out |
11 | Nov 9, 11 | Introduction to neural networks | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/neural-nets/neural-nets.ipynb) [Minimal neural network](https://github.com/YData123/sds265-fa21/raw/main/demos/neural-nets/neural-nets.zip)  |   Thu: Assn 4 in; Assn 6 out |
12 | Nov 16, 18 | Deep neural networks | [<img width="25" src="colab.svg">](https://colab.research.google.com/github/YData123/sds265-fa21/blob/master/demos/deep-nets/deep-nets.ipynb) [Autoencoder examples](https://github.com/YData123/sds265-fa21/raw/main/demos/deep-nets/deep-nets.zip)  |  Tue: Quiz 3 |
13 | Nov 19-28 | No class, Thanksgiving break | <!--[<img width="25" src="colab.svg">]()--> |  |
14 | Nov 30, Dec 2 | Reinforcement learning | <!-- [<img width="25" src="colab.svg">]()--> |   Tue: Assn 6 in; Assn 7 out |
15 | Dec 7, 9 | Societal issues for machine learning | <!--[<img width="25" src="colab.svg">]()--> |   Tue: Quiz 4 <br> Thu: Assn 7 in |

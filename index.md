<link rel="stylesheet" href="theme/css/main.css" />

YData: An Introduction to Data Science
====

Computational and statistical skills are no longer optional in our increasingly data-driven world.
This course aims to enhance students' knowledge and capabilities in the fundamental ideas and skills of data science.
Derived from Berkeley's popular [Data 8](data-8.github.io) course, YData is an introduction to data science that emphasizes
computational and programming skills along with inferential thinking.

YData is designed to be accessible to students with little or no
background in computing, programming, or statistics, but also 
engaging for more technically oriented students through the extensive
use of examples and hands-on data analysis.  The course is based
on the Python programming language, and a special purpose computing


Materials
---

All materials for the course, including the textbook and assignments, are
available for free online under a Creative Commons license.

**Textbook**: [Computational and Inferential Thinking: The Foundations of Data
Science](http://inferentialthinking.com) is a free online textbook that
includes interactive Jupyter notebooks and public data sets for all examples.
The textbook source is maintained as an [open source
project](https://github.com/data-8/textbook).

**Assignments**:
[All assignments from the Spring 2017 course
offering](https://github.com/data-8/data8assets/tree/gh-pages/materials/sp17),
as well as [assignments from the Fall 2016
offering](https://github.com/data-8/data8assets/tree/gh-pages/materials/fa16)
are available as Jupyter notebooks. The notebooks assume a Python 3 installation
with the standard modules from [an Anaconda
installation](https://www.continuum.io/downloads) such as Numpy and Matplotlib,
as well as the [datascience](https://pypi.python.org/pypi/datascience/) and
[okpy](https://pypi.python.org/pypi/okpy/) modules.

**Lecture Materials**: All [lecture videos from Fall
2016](https://www.youtube.com/playlist?list=PLFeJ2hV8Fyt7mjvwrDQ2QNYEYdtKSNA0y)
are hosted by Youtube. Slides as [PDF from Fall 2016](./fa16) and [Google Slides
and Jupyter notebooks from Spring 2017](./sp17) are linked from the respective
course calendars. To request access to the source of the slides for
instructional purposes, please fill out our [Data 8 Instructor
Interest](https://docs.google.com/forms/d/e/1FAIpQLSfFvhl3DOuZZB2fV2FY3qcmBGoG17BwxIhWP91G7rcVqaEguA/viewform)
form.

Infrastructure
---

All of the software components of the course are maintained as open-source
projects. We encourage you to contact us if you want any help using them.

**The [`datascience`](http://data8.org/datascience) module**: The course uses a module
for table manipulation, charts, and maps that provides an interface appropriate
for an introductory course. The `Table` class is similar to a `DataFrame` in
[Pandas](http://pandas.pydata.org/), but explicitly does not support row
indexes, hierarchical indexes, time series data, missing values, slicing, and
many other advanced features that can complicate table manipulation for novices.
The charting features use Matplotlib, but customize the output to match the
pedagogical goals of the course. The mapping features are implemented by
[Folium](https://github.com/python-visualization/folium), but aim to simplify
working with tables and geojson files. While the `datascience` module can
certainly be used outside the context of the course, it was specifically
designed to support the Data 8 curriculum, while setting up students to
transition to more standard tools such as Pandas.

**The [OK](http://okpy.org) autograder and submission system**: The
assignments depend on a Python-based autograder that includes client-side tests
available to students at any time and server-side tests intended for
correctness-based grading. Assignments are distributed with a folder of named
`tests`, which include test cases. These test cases are invoked from within
a notebook.

**Hosted Computing Environment**:
We provide a hosted environment for our students to edit and execute their
Notebooks. It includes two components, a [Kubernetes-based deployment of
JupyterHub](https://github.com/data-8/jupyterhub-k8s/blob/master/README.md) that
we have specifically designed for courses, and an [assignment
server](https://github.com/data-8/nbinteract) that loads assignments into the
students' environment.

If you want more information about any of these tools, please fill out our [Data
8 Instructor
Interest](https://docs.google.com/forms/d/e/1FAIpQLSfFvhl3DOuZZB2fV2FY3qcmBGoG17BwxIhWP91G7rcVqaEguA/viewform)
form or email `denero@berkeley.edu`.

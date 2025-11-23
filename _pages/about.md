---
permalink: /
title: "Mingzhe (Martin) Li"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

# About Me

I am a senior undergraduate student majoring in **Data Science**, with a profound passion for **Robotics** and **Embodied AI**.

My journey began with a fascination for industrial automation, watching robotic arms execute precise movements. This curiosity evolved into a commitment to building intelligent systems that can perceive, reason, and act in the physical world. Unlike a traditional data science student, I approach AI from an engineering perspective—focusing on **Sim-to-Real transfer**, **SLAM in dynamic environments**, and **Vision-Language-Action (VLA) models**.

I am a strong believer in the **"Maker" philosophy**. I founded the **BNBU Navigator Robotics Lab** from scratch, leading a 35-member team to win national awards. I enjoy the full stack of robotics: from mechanical design (SolidWorks) and circuit soldering to implementing complex algorithms in ROS and C++.

I dedicated 80% of my undergraduate time to the laboratory and practical engineering challenges, believing that hands-on creation is the best way to learn robotics.

Currently, I am looking for M.Sc./Ph.D. opportunities in Robotics/AI to further explore **robust perception and dexterous manipulation**.

---

# 🔥 News

* **[Nov 2025]** Completed my Final Year Project on *Robust Monocular SLAM in Dynamic Environments*.
* **[Oct 2025]** Presented our work on In-Context Learning at **ICML 2025** (Poster).
* **[Jun 2025]** Started Internship at China WISPRO as an LLM Engineer.
* **[Apr 2024]** Won **First Prize** at the RoboMaster National Robotics Competition (Northeastern Div.).

---

# 📝 Publications

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<!-- New style rendering if publication categories are defined -->
{% if site.publication_category %}
  {% for category in site.publication_category  %}
    {% assign title_shown = false %}
    {% for post in site.publications reversed %}
      {% if post.category != category[0] %}
        {% continue %}
      {% endif %}
      {% unless title_shown %}
        <h2>{{ category[1].title }}</h2>
        {% assign title_shown = true %}
      {% endunless %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

---

# 🛠 Selected Projects

## 1. Robust Monocular SLAM & Object Tracking

*Keywords: ROS, ORB-SLAM3, YOLO, C++, Python*

* **Problem:** Traditional SLAM systems struggle in highly dynamic environments (e.g., moving people/vehicles).
* **Solution:** Integrated **YOLO** object detection into the **ORB-SLAM3** pipeline to semantically mask dynamic features. Developed a novel evaluation framework to separately assess localization drift and object tracking trajectory.
* **Result:** Significantly improved localization stability and provided a dual-stream output of ego-motion and object tracking.
* [Video Demo] | [Code]

## 2. RoboMaster Robotics Team (Founder & Tech Lead)

*Keywords: Team Management, Mechanical Design, Embedded Systems*

* **Leadership:** Founded the university's first robotics lab (Navigator Lab), securing **200,000 RMB** funding. Built the team from 6 to 35 members.
* **Engineering:** Spearheaded the design of 4 competition robots. Implemented a "4-3-2-1" agile iteration model (Design-Produce-Debug-Optimize).
* **Achievement:** Won **First Prize** (Regional) and established a standardized "Lab Wiki" for knowledge inheritance.
* [Team Website/Photos]

## 3. LLM Agent for Industrial & IP Applications

*Keywords: RAG, LangChain, Prompt Engineering, Multi-Agent System*

* **Industrial:** Developed an AI agent for a digital factory to schedule production and detect defects, improving query efficiency by 40%.
* **Legal Tech:** Engineered an automated patent review agent at China WISPRO, utilizing **RAG** (Retrieval-Augmented Generation) to process complex patent docs, reducing manual review time by 25%.

## 4. Math Olympiad AI Agent (AIMO)

*Keywords: Chain-of-Thought, Fine-tuning*

* Developed an AI agent capable of solving advanced math problems for the Kaggle AIMO competition.
* Utilized advanced prompt engineering and statistical decision-making to enhance reasoning capabilities.

---

# 💼 Experience

* **China WISPRO Intellectual Property LLP** | *LLM Engineer Intern* (Jun 2025 – Aug 2025)
* **EpicHust Technology Co., Ltd.** | *LLM Engineer Intern* (Jan 2025 – Feb 2025)
* **BNBU Navigator Robotics Lab** | *Founder & Tech Lead* (Apr 2023 – Present)
* **Guangdong Key Lab for AI & Multi-Model Data Processing** | *Research Assistant* (Nov 2022 – Present)

---

# 🏆 Honors & Awards

* **First Prize**, RoboMaster National Robotics Competition (Northeastern Division) [2024]
* **Honorable Mention**, Mathematical Contest in Modeling (MCM) [2024]
* **Second Prize**, 'Greater Bay Area Cup' AI for Science Competition [2024]
* **Outstanding Poster**, Faculty of Science and Technology Poster Exhibition [2024]
* **First Prize**, Huazhong Cup Mathematical Modeling Competition [2023]

---

# 💻 Tech Stack

* **Languages:** Python (Advanced), C++ (Proficient), SQL, MATLAB.
* **Robotics:** ROS 1/2, SLAM (ORB-SLAM3), Gazebo, MoveIt.
* **AI/ML:** PyTorch, TensorFlow, LangChain, Hugging Face, OpenCV.
* **Tools:** SolidWorks (CAD), Git, Linux, Docker, 3D Printing (FDM/SLA).

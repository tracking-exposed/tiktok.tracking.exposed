---
title: Winter School 2022
subtitle: One of the first research using this tool
date: 2021-11-26
draft: false
---


The [Digital Methods Winter School and Data Sprint 2022](https://wiki.digitalmethods.net/Dmi/WinterSchool2022) will be hold (online) at Amsterdam University (10-14 January 2022).

## Project pitch: "Mapping Shadow-Ban on TikTok: expose hidden censorship with a cross-national research"
    
**Background and purposes:**
    
Owned by the Chinese tech company ByteDance, TikTok is a social networking application that allows users to create and share short videos. With about 1 billion monthly active users worldwide, TikTok owes its popularity to teenagers and young adults, who, according to recent statistics, account for over 60% of the user base (Doyle, 2021). Launched in 2017, TikTok was the most downloaded app in 2020 and 2021 - both in the U.S. and worldwide - and has become a focal point in the geo-political tensions between the U.S. and China. 
    
During the first five years of its life, the platform has raised a number of concerns involving censorship, misinformation, data privacy, and interferences with political elections. Among other things, TikTok's censorship policy has been criticized as non-transparent: with this respect, the company has been accused of censoring content in accordance with Beijing policies, purposedly obscuring controversial political content, such as content criticising various leaders, discussing the question of human rights abuses in Xinjiang internment camps or supporting political protests in Hong Kong (Hern, 2019). Leaked documents also report that videos produced by users deemed "too ugly, poor, or disabled" have been systematically suppressed by the platform (Biddle et al., 2020). Similarly, moderators have been obscuring any content conveying pro-LGBTQ+ messages (Reuter and Köver, 2019).
    
The user experience is almost exclusively centered around the content surfaced by the *For You* feed, which gives this algorithm a huge influence in shaping our culture and informational environment. In this context, our project sets out to investigate which content is demoted on the platform, with a focus on content regarding politically sensitive issues. When a content or hashtag is shadow-banned, it is removed from algorithmic results. This means it will not appear in the For You Feed or the search results, making it almost invisible on the platform. 
    
**Research questions:**
  
This project aims to map censorship on TikTok, taking into account the geographic differences. The data sprint will focus on improving the methodologies to spot when a topic or a piece of content is being shadow-banned. We also aim to automate these procedures, in order to allow a machine to perform and replicate censorship tests.
The instances of censorship which we will detect will be aggregated. The program can also be an opportunity to design a better interface for censorship reports, to continue the crowdsourcing effort with volunteer internautes after the Winter School.
Another challenge will be to display the results in a digestible manner. A set of country and topics of interest can be defined to better scope the work, depending on participants' interests and language skills. 
The main research questions can be summarized as follow (but we will be happy to re-examine them together):

- How can we spot banned and shadow-banned content? How can we automate the process of detecting these forms of censorship?

- Which criteria does the platform implement to censor content? Which of these criteria is location-sensitive?

- Investigate the algorithmic neutrality regarding political content: which content is promoted or demoted on the platform? To answer this question, we could focus on the upcoming presidential elections in France.

**Situating the project and case:**
    
Our project takes inspiration from several similar research investigating censorship on the platform. In particular, the report published by ASPI (Ryan et al., 2020) indicated that TikTok engages in censorship on various political and social topics. Their case studies show how censorship affects the discussion on LGBTQ+-related topics and diverse political issues and leaders. Specifically, the research found that shadowban and censorship are affected by country-specific content guidelines.
There are concerns that TikTok's algorithmic moderation is biased, including concerning politically sensitive topics. Internal documents leaked by The Intercept have shown that TikTok moderators were explicitly instructed to ban politically sensitive content for the Chinese Communist Party, such as posts referring to the Tiananmen Square protests. The company declared that these policies are no longer in place. Though, no independent study has been able to confirm their claims. Even if the policies have changed, the annotations produced by the moderators are used to train automated content filters, which can durably bias the algorithms.
Building on these results, our goal is to build a world map of shadow-banning on TikTok: we are particularly interested in exploring non-English content and in countries where political censorship is more widespread.
    
**Methods, data sets, and tools:**
    
The exploration will start from an initial list of keywords which we know to be censored in specific regions. Our goal is to generalize the detection of censorship, by identifying as many cues as possible which can be detected from the user interface.
    
The investigation will rely on the Tracking Exposed browser extension to record the participants' experiments and collect the resulting data in a systematic and machine-readable format by passively scraping the content displayed on the browser.
    
In order to capture geographic differences, participants will be given access to VPNs and, when needed, residential IP addresses located in the country of interest.
    
The data collected will be sent to a database where all the evidence collected will be stored. These data will be analyzed, before being aggregated to build a map of the censorship on the platform.
    
We will also reflect on the design and inplemention of a reporting interface for internauts to contribute to the reporting and evidence collection of social media censorship. The goal is also for the Winter School to pave the way for a wider crowdsourcing effort of censorship reports. For an example of this type of campaign, see the work of our partners [ooni.org](https://ooni.org/).
    
**Preliminary findings and/or expected outcomes:**
    
We will provide the participants list of sample censored contents (hashtag, topic, channels, videos) and the tool to record new evidence (TikTok Tracking Exposed), to test different countries (VPNs, Residential IP) and structured evidence page where all the data collected will be stored. 
    
We expect to enrich the list of censored content and, in the meanwhile, improve the methodologies to detect censored content and come up with new ones. We will also design an interface which could make censorship reporting accessible to ordinary users. 
    
The final goal is to create an interactive world map, which would, on hover, display the different hashtags and videos that are censored in a specific country. These results will inform users and regulators on the extent and scope of algorithmic censorship. 
    
    
**Relevant expertise:**
    
All the participants are welcome to the project; In particular, the following interests or expertise would be particularly relevant:
    
- Knowledge or experience about content take-dows on social media in general.
- Experience with the analysis of TikTok.
- Knoweldge or language fluency of geopolitical contexts in which political censorship is suspected.
- Everyone interested in this map visualization is invited to participate.

**References**
    
- Biddle, S., Ribeiro, P. V., Dias. T. (2020, 16 March). Invisible Censorship. TikTok Told Moderators to Suppress Posts by “Ugly” People and the Poor to Attract New Users. The Intercerpt. Available at: [https://theintercept.com/2020/03/16/tiktok-app-moderators-users-discrimination/](https://theintercept.com/2020/03/16/tiktok-app-moderators-users-discrimination/)
- Doyle, B. (2021, September) Tiktok statistics. wallaroo. Available at: [https://wallaroomedia.com/blog/social-media/tiktok-statistics/](https://wallaroomedia.com/blog/social-media/tiktok-statistics/)
- Hern, A. (2019, 26 September). Revealed: how TikTok censors videos that do not please Beijing. The Guardian. Available at: [https://www.theguardian.com/technology/2019/sep/26/tiktoks-local-moderation-guidelines-ban-pro-lgbt-content](https://www.theguardian.com/technology/2019/sep/26/tiktoks-local-moderation-guidelines-ban-pro-lgbt-content)
- Reuter, M. and Köver, C. (2019, 23 November). Cheerfulness and censorship. Netzpolitik.org. Available at: [https://netzpolitik.org/2019/cheerfulness-and-censorship/](https://netzpolitik.org/2019/cheerfulness-and-censorship/)
- Ryan, F., Fritz, A., and Impiombato, D. (2020). TikTok and WeChat. Curating and controlling global information flows. Available at: [https://www.aspi.org.au/report/tiktok-wechat](https://www.aspi.org.au/report/tiktok-wechat)
    
## Project pitch [slides](/slides/winter-school_project-pitch) 

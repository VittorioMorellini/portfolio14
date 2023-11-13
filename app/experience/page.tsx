"use client"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DeveloperIcon from '@mui/icons-material/DeveloperMode';
import SystemIcon from '@mui/icons-material/SystemSecurityUpdateWarning';
import DesktopIcon from '@mui/icons-material/DesktopWindows';
import WebIcon from '@mui/icons-material/WebOutlined';
import ComputerIcon from '@mui/icons-material/SecurityRounded';
import EducationIcon from '@mui/icons-material/BookOnlineOutlined';
import ArmyIcon from '@mui/icons-material/WarningOutlined';
import Typography from '@mui/material/Typography';
import PageTransition from '@/components/pageTransition';
import { motion } from 'framer-motion';

function Experience() {

  return (
    <PageTransition>
    <div>
      <h1 className="text-3xl text-center font-bold pb-4"> My professional experience</h1>
      <Timeline position="alternate" className='mx-auto'>
        <TimelineItem>
          <TimelineOppositeContent
            align="right"
            variant="body1"
            color="text.secondary"
            className='font-bold bg-cyan-300'
          >
            1995, July. Informatic Engineering Degree (106/110 Modena, Italy)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <motion.div
                whileHover={{ scale: 1.1 }}
              >
                <EducationIcon />
              </motion.div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Education
            </Typography>
            <Typography>Thesis: A method to translate Easier Schema in PLC code</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            align="left"
            variant="body1"
            color="text.secondary"
            className='font-bold bg-cyan-300'
          >
            1995, November (Modena, Italy)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
            <motion.div
                whileHover={{ scale: 1.1 }}
              >
              <ArmyIcon />
            </motion.div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Engineer professionist
            </Typography>
            <Typography>Exam taken during military service</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            className='font-bold bg-cyan-300'
            align="right"
            variant="body1"
            color="text.secondary"
          >
            1996 Delta Informatica (Modena, Italy)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
            <motion.div
                whileHover={{ scale: 1.1 }}
              >
              <SystemIcon />
            </motion.div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Lan manager
            </Typography>
            <Typography></Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            className='font-bold bg-cyan-300'
            align="left"
            variant="body1"
            color="text.secondary"
          >
            2000 Enne+1 (Modena, Italy)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
            <motion.div
                whileHover={{ scale: 1.1 }}
              >
              <ComputerIcon />
            </motion.div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Visual basic 6 developer
            </Typography>
            <Typography>My target is to develop software, I started my route</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            className='font-bold bg-cyan-300'
            align="right"
            variant="body1"
            color="text.secondary"
          >
            2001 CastGroup (Modena, Italy)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
            <motion.div
                whileHover={{ scale: 1.1 }}
              >
              <DeveloperIcon />
            </motion.div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Visual basic 6 and .Net Developer
            </Typography>
            <Typography>Experience in publishing economy and printed circuits production</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            className='font-bold bg-cyan-300'
            align="left"
            variant="body1"
            color="text.secondary"
          >
            2014 Code Guru (Carpi, Italy)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
            <motion.div
                whileHover={{ scale: 1.1 }}
              >
              <LaptopMacIcon />
            </motion.div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Web engineer
            </Typography>
            <Typography>Startup experience</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            className='font-bold bg-cyan-300'
            align="right"
            variant="body1"
            color="text.secondary"
          >
            2015 IG Consulting (Modena, Italy)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
            <motion.div
                whileHover={{ scale: 1.1 }}
              >
              <DesktopIcon />
            </motion.div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              .NET web and winform developer
            </Typography>
            <Typography>Web services and applications for health sector</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            className='font-bold bg-cyan-300'
            align="left"
            variant="body1"
            color="text.secondary"
          >
            2020 Sixtema (Modena, Italy)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
            <motion.div
                whileHover={{ scale: 1.1 }}
              >
              <WebIcon />
            </motion.div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
            Full stack developer in dotnet, React.js, Next.js 
            </Typography>
            <Typography>Web application deployed as Saas</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
    </PageTransition>
  );
}

export default Experience;
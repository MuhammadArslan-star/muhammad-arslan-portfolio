import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RESUME_DATA } from './resume.data';

export interface ProjectScreenshot {
  src: string;
  label: string;
}

export interface ProjectModule {
  name: string;
  icon: string;
  screenshots: ProjectScreenshot[];
}

export interface ProjectShowcase {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  type: 'mobile' | 'web';
  gradient: string;
  link?: string;
  // For mobile apps - simple carousel
  screenshots?: string[];
  // For web apps - module-based gallery
  modules?: ProjectModule[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  data = RESUME_DATA;

  projects: ProjectShowcase[] = [
    {
      id: 'terminal',
      name: 'Mobile Sentrix Attendance Terminal',
      description: 'A powerful attendance management terminal app with real-time clock in/out, break management, dynamic scheduling, and offline-capable data sync. Built with Ionic + Angular featuring a stunning dark-themed UI.',
      techStack: ['Ionic', 'Angular', 'TypeScript', 'GraphQL'],
      type: 'mobile',
      link: 'https://apps.apple.com/gb/app/mobile-sentrix-terminal-mst/id6502637979',
      screenshots: [
        'assets/terminal/terminal1.webp',
        'assets/terminal/terminal2.webp',
        'assets/terminal/terminal3.webp',
        'assets/terminal/terminal4.webp',
        'assets/terminal/terminal5.webp',
        'assets/terminal/terminal6.webp',
        'assets/terminal/terminal7.webp'
      ],
      gradient: 'var(--proj-terminal-bg)'
    },
    {
      id: 'employee',
      name: 'Mobile Sentrix Employee App',
      description: 'Comprehensive HRMS employee app featuring task management, timesheets, asset tracking, leave & expense management, real-time messaging, and smart scheduler — all in a sleek, intuitive interface.',
      techStack: ['Ionic', 'Angular', 'TypeScript', 'REST APIs', 'GraphQL', 'GraphQL Subscriptions', 'Socket.io', 'SQLite', 'IndexedDB', 'FCM', 'RxJS'],
      type: 'mobile',
      link: 'https://apps.apple.com/us/app/hrms-mobile/id6449835914?',
      screenshots: [
        'assets/user-app/user1.webp',
        'assets/user-app/user2.webp',
        'assets/user-app/user3.webp',
        'assets/user-app/user4.webp',
        'assets/user-app/user5.webp',
        'assets/user-app/user6.webp',
        'assets/user-app/user7.webp',
        'assets/user-app/user8.webp',
        'assets/user-app/user9.webp'
      ],
      gradient: 'var(--proj-employee-bg)'
    },
    {
      id: 'web-hrms',
      name: 'Mobile Sentrix Employee Web Portal',
      description: 'A full-featured HRMS web portal enabling employees and managers to handle leave requests & approvals, loan management, attendance tracking, expense claims, task management, and comprehensive employee profiles — all from a modern responsive web interface.',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'REST APIs', 'GraphQL', 'RxJS'],
      type: 'web',
      link: 'https://hrms-bugs.sentrixbar.com/',
      gradient: 'var(--proj-web-bg)',
      modules: [
        {
          name: 'Employee Profile',
          icon: '👤',
          screenshots: [
            { src: 'assets/user-web-app/profile/Employment-Contract.png', label: 'Employment Contract' },
            { src: 'assets/user-web-app/profile/Documents.png', label: 'Documents' },
            { src: 'assets/user-web-app/profile/Employee Training.png', label: 'Employee Training' },
            { src: 'assets/user-web-app/profile/Write Up.png', label: 'Write Up' },
            { src: 'assets/user-web-app/profile/Assets : Accessories.png', label: 'Assets & Accessories' },
            { src: 'assets/user-web-app/profile/Salary Detail.png', label: 'Salary Detail' },
            { src: 'assets/user-web-app/profile/Schedule.png', label: 'Schedule' }
          ]
        },
        {
          name: 'Leave Management',
          icon: '🏖️',
          screenshots: [
            { src: 'assets/user-web-app/leave/request/leave-request-list.png', label: 'Leave Request List' },
            { src: 'assets/user-web-app/leave/request/leave-request-form-top.png', label: 'Leave Request Form (Top)' },
            { src: 'assets/user-web-app/leave/request/leave-request-form-bottom.png', label: 'Leave Request Form (Bottom)' },
            { src: 'assets/user-web-app/leave/request/leave-request-detail-top.png', label: 'Request Detail (Top)' },
            { src: 'assets/user-web-app/leave/request/leave-request-detail-bottom.png', label: 'Request Detail (Bottom)' },
            { src: 'assets/user-web-app/leave/approval/leave-approval-list.png', label: 'Leave Approval List' },
            { src: 'assets/user-web-app/leave/approval/leave-approval-detail-top.png', label: 'Approval Detail (Top)' },
            { src: 'assets/user-web-app/leave/approval/leave-approval-detail-bottom.png', label: 'Approval Detail (Bottom)' }
          ]
        },
        {
          name: 'Loan Management',
          icon: '💰',
          screenshots: [
            { src: 'assets/user-web-app/loan/request/loan-request-list.png', label: 'Loan Request List' },
            { src: 'assets/user-web-app/loan/request/loan-request-form.png', label: 'Loan Request Form' },
            { src: 'assets/user-web-app/loan/approval/loan-apprival-list.png', label: 'Loan Approval List' },
            { src: 'assets/user-web-app/loan/approval/loan-approval-detail.png', label: 'Loan Approval Detail' }
          ]
        },
        {
          name: 'Attendance',
          icon: '⏰',
          screenshots: [
            { src: 'assets/user-web-app/attendance/rerquest/attendance-request-list.png', label: 'Attendance Request List' },
            { src: 'assets/user-web-app/attendance/rerquest/attendance-request-form-1.png', label: 'Request Form (View 1)' },
            { src: 'assets/user-web-app/attendance/rerquest/attendance-request-form-2.png', label: 'Request Form (View 2)' },
            { src: 'assets/user-web-app/attendance/approval/attendance-approval-list.png', label: 'Attendance Approval List' },
            { src: 'assets/user-web-app/attendance/approval/attendance-approval-detail.png', label: 'Approval Detail' }
          ]
        },
        {
          name: 'Expense Claims',
          icon: '🧾',
          screenshots: [
            { src: 'assets/user-web-app/expense/request/expense-request-list.png', label: 'Expense Request List' },
            { src: 'assets/user-web-app/expense/request/expense-request-form.png', label: 'Expense Request Form' },
            { src: 'assets/user-web-app/expense/approval/expense-approval-list.png', label: 'Expense Approval List' },
            { src: 'assets/user-web-app/expense/approval/expense-approval-detail.png', label: 'Expense Approval Detail' }
          ]
        },
        {
          name: 'Task Management',
          icon: '📋',
          screenshots: [
            { src: 'assets/user-web-app/task/task-list.png', label: 'Task List' },
            { src: 'assets/user-web-app/task/create-task-top.png', label: 'Create Task (Top)' },
            { src: 'assets/user-web-app/task/create-task-bottom.png', label: 'Create Task (Bottom)' },
            { src: 'assets/user-web-app/task/task-view.png', label: 'Task Detail View' },
            { src: 'assets/user-web-app/task/task-comments.png', label: 'Task Comments' }
          ]
        }
      ]
    },
    {
      id: 'device-processing',
      name: 'Device Processing',
      description: 'A specialized mobile application for tracking and processing device repairs and service orders. Built to streamline workflow operations for both managers and field technicians with comprehensive scheduling, parts management, and status updates.',
      techStack: ['Ionic', 'Angular', 'TypeScript', 'GraphQL', 'GraphQL Subscriptions', 'SQLite', 'IndexedDB', 'FCM', 'RxJS'],
      type: 'mobile',
      screenshots: [
        'assets/device-processing/manager/dpi1.png',
        'assets/device-processing/manager/dpi2.png',
        'assets/device-processing/manager/dpi3.png',
        'assets/device-processing/manager/dpi4.png',
        'assets/device-processing/manager/dpi5.png',
        'assets/device-processing/manager/dpi6.png',
        'assets/device-processing/manager/dpi7.png',
        'assets/device-processing/manager/dpi8.png',
        'assets/device-processing/manager/dpi9.png',
        'assets/device-processing/manager/dpi10.png',
        'assets/device-processing/manager/dpi10(1).png',
        'assets/device-processing/manager/dpi10(2).png',
        'assets/device-processing/manager/dpi11.png',
        'assets/device-processing/manager/dpi12.png',
        'assets/device-processing/manager/dpi13.png',
        'assets/device-processing/manager/dpi14.png',
        'assets/device-processing/manager/dpi15.png',
        'assets/device-processing/manager/dpi16.png',
        'assets/device-processing/manager/dpi17.png',
        'assets/device-processing/manager/dpi18.png',
        'assets/device-processing/manager/dpi19.png',
        'assets/device-processing/manager/dpi20.png',
        'assets/device-processing/technician/dpi-tech1.png',
        'assets/device-processing/technician/dpi-tech2.png',
        'assets/device-processing/technician/dpi-tech3.png',
        'assets/device-processing/technician/dpi-tech4.png',
        'assets/device-processing/technician/dpi-tech5.png',
        'assets/device-processing/technician/dpi-tech6.png',
        'assets/device-processing/technician/dpi-tech7.png',
        'assets/device-processing/technician/dpi-tech8.png'
      ],
      gradient: 'var(--proj-employee-bg)'
    }
  ];

  // Mobile carousel state
  activeIndices: { [key: string]: number } = {};
  private intervals: { [key: string]: any } = {};

  // Web project state
  activeModule: { [key: string]: number } = {};
  activeModuleScreenshot: { [key: string]: number } = {};

  ngOnInit() {
    this.projects.forEach(p => {
      if (p.type === 'mobile' && p.screenshots) {
        this.activeIndices[p.id] = 0;
        this.startAutoScroll(p.id, p.screenshots.length);
      }
      if (p.type === 'web' && p.modules) {
        this.activeModule[p.id] = 0;
        this.activeModuleScreenshot[p.id] = 0;
      }
    });
  }

  ngOnDestroy() {
    Object.values(this.intervals).forEach(interval => clearInterval(interval));
  }

  // Mobile carousel methods
  startAutoScroll(projectId: string, total: number) {
    this.intervals[projectId] = setInterval(() => {
      this.activeIndices[projectId] = (this.activeIndices[projectId] + 1) % total;
    }, 3000);
  }

  resetAutoScroll(projectId: string, total: number) {
    if (this.intervals[projectId]) {
      clearInterval(this.intervals[projectId]);
    }
    this.startAutoScroll(projectId, total);
  }

  goToSlide(projectId: string, index: number, total: number) {
    this.activeIndices[projectId] = index;
    this.resetAutoScroll(projectId, total);
  }

  prevSlide(projectId: string, total: number) {
    this.activeIndices[projectId] = (this.activeIndices[projectId] - 1 + total) % total;
    this.resetAutoScroll(projectId, total);
  }

  nextSlide(projectId: string, total: number) {
    this.activeIndices[projectId] = (this.activeIndices[projectId] + 1) % total;
    this.resetAutoScroll(projectId, total);
  }

  // Web project module methods
  selectModule(projectId: string, moduleIndex: number) {
    this.activeModule[projectId] = moduleIndex;
    this.activeModuleScreenshot[projectId] = 0;
  }

  prevWebScreenshot(projectId: string, total: number) {
    this.activeModuleScreenshot[projectId] = (this.activeModuleScreenshot[projectId] - 1 + total) % total;
  }

  nextWebScreenshot(projectId: string, total: number) {
    this.activeModuleScreenshot[projectId] = (this.activeModuleScreenshot[projectId] + 1) % total;
  }

  goToWebScreenshot(projectId: string, index: number) {
    this.activeModuleScreenshot[projectId] = index;
  }

  getActiveModuleScreenshots(project: ProjectShowcase): ProjectScreenshot[] {
    if (project.modules && project.modules.length > 0) {
      const idx = this.activeModule[project.id] || 0;
      return project.modules[idx].screenshots;
    }
    return [];
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

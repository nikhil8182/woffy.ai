import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

/**
 * Track page views
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (!analytics) return;
  
  logEvent(analytics, 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href
  });
};

/**
 * Track waitlist signup
 */
export const trackWaitlistSignup = (interest) => {
  if (!analytics) return;
  
  logEvent(analytics, 'waitlist_signup', {
    interest: interest || 'not_specified',
    method: 'web_modal'
  });
};

/**
 * Track waitlist modal open
 */
export const trackWaitlistModalOpen = () => {
  if (!analytics) return;
  
  logEvent(analytics, 'waitlist_modal_open', {
    method: 'web_modal'
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName, location) => {
  if (!analytics) return;
  
  logEvent(analytics, 'button_click', {
    button_name: buttonName,
    location: location
  });
};

/**
 * Track custom events
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (!analytics) return;
  
  logEvent(analytics, eventName, eventParams);
};




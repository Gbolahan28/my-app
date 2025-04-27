export const url = {
  // Auth
  welcome: '/',
  postInitiateSignup: '/auth/register',
  verifyEmailOtp: '/auth/verification',
  postInitiateLogin: '/auth/login/',
  requestOtpForForgotPassword: '/auth/request-otp',
  requestOtp: '/auth/request-otp',
  changePassword: '/auth/change-password',
  resetPassword: '/auth/password-reset-confirm-otp',
  verifyOtp: '/auth/verify-otp',
  logout: '/auth/logout', 
  updateProfile: '/auth/profile',
  fetchToken: '/auth/token/',

  // SPOTS
  getSpots: '/spots/',
  getSingleSpot: '/spots/{slug}',
  getSpotMedia: '/spot-media/{slug}',

  // USER
  getUserProfile: '/profile/',
  updateUserProfile: '/profile/',
  changePassword: '/change-password/',

  // REVIEWS
  getReviews: '/api/v1/reviews/',
  getSingleReview: '/api/v1/reviews/{id}/',
};

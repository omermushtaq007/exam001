// User Interface

export interface AppUser {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  emailVerified: boolean;
}

// Coupon Interface Model

export interface Coupon {
  id: string;
  couponData: CouponData;
}
export interface CouponData {
  couponCode: string;
  date: string;
  discount: string;
  discountType: string;
  status: string;
}

// Certificate Interface Model

export interface Certificate {
  id: string;
  certificateData: CertificateData;
}

export interface CertificateData {
  slug: string;
  certificate: string;
  status: boolean;
}

// Exam Interface Model

export interface Exam {
  id: string;
  examData: ExamData;
}

export interface ExamData {
  slug: string;
  examCode: string;
  examName: string;
  certificateName: string;
  questions: string;
  date: string;
  price: string;
  status: boolean;
  retired: boolean;
}

// Vendor Interface Model

export interface Vendor {
  id: string;
  vendorData: VendorData;
}

export interface VendorData {
  slug: string;
}

import React from "react";
import { Calendar, FileText, Users, ChevronRight } from "lucide-react";
import BlogManagementImage from "../../../assets/Blog-Management-Platform-How-It-Helps-Bloggers.png";

const BlogPage = () => {
  return (
    <div className="bg-gray-100 mt-[100px] min-h-screen font-sans">
      <main className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Content */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ធ្វើការបកប្រែប្លក់សម្រាប់ការចូលដំណើរការនិងការប៉ះពាល់ខ្ពស់
            </h2>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <Users className="mr-1 w-4 h-4" />
              <span>សាសវាទី បនរាជ្យ</span>
              <Calendar className="ml-4 mr-1 w-4 h-4" />
              <span>មេសា 24, 2025</span>
              <FileText className="ml-4 mr-1 w-4 h-4" />
              <span>ខ្លឹមសារ</span>
              <span className="ml-4">2105 ការមើល</span>
            </div>
            <img
              src={BlogManagementImage}
              alt="ការបកប្រែខ្លឹមសារ"
              className="w-full rounded-md mb-6"
              style={{
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
              }}
            />
            <p className="text-gray-700 leading-relaxed mb-4">
              ការបកប្រែខ្លឹមសារត្រូវបានផ្តល់ជំនួយសម្រាប់ការចូលដំណើរការជាមួយអ្នកទស្សនាកាន់តែធំ។
              មុននេះប្លក់មានតែសម្រាប់ការចុះផ្សាយតាមអក្សរ
              ប៉ុន្តែឥឡូវនេះការបកប្រែខ្លឹមសារត្រូវបានអនុវត្តនៅក្នុងទ្រង់ទ្រាយផ្សេងៗ។
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              ការបកប្រែខ្លឹមសារមានអត្ថប្រយោជន៍ធំមួយសម្រាប់ការចូលដំណើរការទៅកាន់ជួរប្រកួតដែលពិភពលោក។
              វាអាចនាំឱ្យអ្នកឈានដល់ទីផ្សារថ្មីៗ
              ហើយមានការបង្ហោះជាផ្លូវការលើផែនទីអ៊ីនធើណិត។
            </p>
            <p className="text-gray-700 leading-relaxed">
              សម្រាប់អ្នកទាំងអស់គ្នាដែលកំពុងស្វែងរកចំណេះដឹងដើម្បីបង្កើតតំបន់ដែលមានអត្ថប្រយោជន៍
              សូមសាកល្បងការបកប្រែខ្លឹមសារ។
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              អ្នកអាចធ្វើការបកប្រែខ្លឹមសារពីប្លក់ទៅជាវីដេអូ ពូកែតបវិទ្យុ
              ឬសង្គ្រោះផ្សេងៗ។
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <ChevronRight className="mr-2 text-blue-500" /> ការបោះពុម្ពថ្មីៗ
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-blue-500 transition-colors flex items-center">
                <ChevronRight className="mr-1 text-blue-400" />
                <a href="#">
                  ធ្វើការបកប្រែខ្លឹមសារ សម្រាប់ការចូលដំណើរការនិងការប៉ះពាល់ខ្ពស់
                </a>
                <p className="text-gray-500 text-sm ml-2">មេសា 24, 2025</p>
              </li>
              {/* More recent posts */}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <ChevronRight className="mr-2 text-blue-500" />
              ការបង្រៀន
            </h3>
            <ul className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <li className="text-gray-700 hover:text-blue-500 transition-colors flex items-center justify-between border-b border-gray-200 pb-1">
                <span>ការប្រាស្រ័យប្លក់</span>
                <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                  21
                </span>
              </li>
              {/* More categories */}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;

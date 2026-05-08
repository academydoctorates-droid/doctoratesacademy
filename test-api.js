// Quick script to test the backend API and see image paths
// Run with: node test-api.js

const https = require('https');

const BASE_URL = 'https://doctoratesacademybackend.onrender.com';

function fetchData(endpoint) {
  return new Promise((resolve, reject) => {
    https.get(`${BASE_URL}${endpoint}`, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function testAPI() {
  console.log('🔍 Testing Backend API...\n');
  console.log('Backend URL:', BASE_URL);
  console.log('=' .repeat(80));
  
  try {
    // Test Members endpoint
    console.log('\n📊 Testing /members endpoint...');
    const members = await fetchData('/members');
    
    if (members && members.length > 0) {
      const firstMember = members[0];
      console.log('\n✅ Members endpoint working!');
      console.log('First member:', firstMember.firstName, firstMember.familyName);
      console.log('\nprofileImage object:', JSON.stringify(firstMember.profileImage, null, 2));
      
      if (firstMember.profileImage && firstMember.profileImage.filename) {
        const imagePath = firstMember.profileImage.filename;
        console.log('\n📸 Image filename:', imagePath);
        console.log('Possible URLs to test:');
        console.log('  1.', `${BASE_URL}/${imagePath}`);
        console.log('  2.', `${BASE_URL}/uploads/${imagePath}`);
        console.log('  3.', `${BASE_URL}/${imagePath.replace(/^\/+/, '')}`);
      }
    } else {
      console.log('❌ No members found');
    }
    
    // Test Posts endpoint
    console.log('\n' + '='.repeat(80));
    console.log('\n📊 Testing /post endpoint...');
    const posts = await fetchData('/post');
    
    if (posts && posts.length > 0) {
      const firstPost = posts[0];
      console.log('\n✅ Posts endpoint working!');
      console.log('First post:', firstPost.short_description);
      console.log('\nthumbnail_image object:', JSON.stringify(firstPost.thumbnail_image, null, 2));
      
      if (firstPost.thumbnail_image && firstPost.thumbnail_image.filename) {
        const imagePath = firstPost.thumbnail_image.filename;
        console.log('\n📸 Image filename:', imagePath);
        console.log('Possible URLs to test:');
        console.log('  1.', `${BASE_URL}/${imagePath}`);
        console.log('  2.', `${BASE_URL}/uploads/${imagePath}`);
        console.log('  3.', `${BASE_URL}/${imagePath.replace(/^\/+/, '')}`);
      }
    } else {
      console.log('❌ No posts found');
    }
    
    console.log('\n' + '='.repeat(80));
    console.log('\n✅ API test complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Copy one of the "Possible URLs" above');
    console.log('2. Paste it in your browser');
    console.log('3. See which one loads the image correctly');
    console.log('4. Update getImageUrl() function accordingly\n');
    
  } catch (error) {
    console.error('❌ Error testing API:', error.message);
  }
}

testAPI();

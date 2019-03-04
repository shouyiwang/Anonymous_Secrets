#Secret.find_each { |s| Secret.reset_counters(s.id, :comments) }

Secret.destroy_all
s1 = Secret.create(content: "The 1st secret.", category: "normal", likes: 0, dislikes: 0)
s2 = Secret.create(content: "The 2nd secret.", category: "normal", likes: 0, dislikes: 0)
s3 = Secret.create(content: "The 3rd secret.", category: "normal", likes: 0, dislikes: 0)

Comment.destroy_all
c1 = Comment.create(content: "The 1st comment.")
c2 = Comment.create(content: "The 2nd comment.")
c3 = Comment.create(content: "The 3rd comment.")
c4 = Comment.create(content: "The 4th comment.")
c5 = Comment.create(content: "The 5th comment.")
c6 = Comment.create(content: "The 6th comment.")
c7 = Comment.create(content: "The 7th comment.")

s1.comments << c1
s1.comments << c2
s2.comments << c3
s2.comments << c4
s3.comments << c5
s3.comments << c6
s3.comments << c7

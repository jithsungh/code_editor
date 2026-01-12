const problemData = {
  "title": "Add Two Numbers",
  "problem_id": "2",
  "frontend_id": "2",
  "difficulty": "Medium",
  "problem_slug": "add-two-numbers",
  "topics": [
    "Linked List",
    "Math",
    "Recursion"
  ],
  "description": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
  "examples": [
    {
      "example_num": 1,
      "example_text": "Input: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807."
    },
    {
      "example_num": 2,
      "example_text": "Input: l1 = [0], l2 = [0]\nOutput: [0]"
    },
    {
      "example_num": 3,
      "example_text": "Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\nOutput: [8,9,9,9,0,0,0,1]"
    }
  ],
  "constraints": [
    "The number of nodes in each linked list is in the range [1, 100].",
    "0 <= Node.val <= 9",
    "It is guaranteed that the list represents a number that does not have leading zeros."
  ],
  "code_snippets": {
    "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        \n    }\n};",
    "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        \n    }\n}",
    "python3": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        ",
    "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function(l1, l2) {\n    \n};",
    "typescript": "/**\n * Definition for singly-linked list.\n * class ListNode {\n *     val: number\n *     next: ListNode | null\n *     constructor(val?: number, next?: ListNode | null) {\n *         this.val = (val===undefined ? 0 : val)\n *         this.next = (next===undefined ? null : next)\n *     }\n * }\n */\n\nfunction addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {\n    \n};",
    "golang": "/**\n * Definition for singly-linked list.\n * type ListNode struct {\n *     Val int\n *     Next *ListNode\n * }\n */\nfunc addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {\n    \n}",
    "rust": "// Definition for singly-linked list.\n// #[derive(PartialEq, Eq, Clone, Debug)]\n// pub struct ListNode {\n//   pub val: i32,\n//   pub next: Option<Box<ListNode>>\n// }\n// \n// impl ListNode {\n//   #[inline]\n//   fn new(val: i32) -> Self {\n//     ListNode {\n//       next: None,\n//       val\n//     }\n//   }\n// }\nimpl Solution {\n    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {\n        \n    }\n}",
    "csharp": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     public int val;\n *     public ListNode next;\n *     public ListNode(int val=0, ListNode next=null) {\n *         this.val = val;\n *         this.next = next;\n *     }\n * }\n */\npublic class Solution {\n    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {\n        \n    }\n}"
  },
  "solution": "<h3>Approach 1: Elementary Math</h3><p><strong>Intuition:</strong></p><p>Keep track of the carry using a variable and simulate digits-by-digits sum starting from the head of list, which contains the least-significant digit.</p><p><strong>Algorithm:</strong></p><ol><li>Initialize current node to dummy head of the returning list.</li><li>Initialize carry to 0.</li><li>Loop through lists l1 and l2 until you reach both ends and carry is 0.</li><li>Set x to node l1's value. If l1 has reached the end, set to 0.</li><li>Set y to node l2's value. If l2 has reached the end, set to 0.</li><li>Set sum = x + y + carry.</li><li>Update carry = sum / 10.</li><li>Create a new node with the digit value of (sum mod 10) and set it to current node's next.</li><li>Advance both l1 and l2.</li><li>Return dummy head's next node.</li></ol><p><strong>Complexity Analysis:</strong></p><ul><li>Time complexity: O(max(m, n))</li><li>Space complexity: O(1)</li></ul>"
}

export default problemData


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: Mou
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: Pa$$W0rd      
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 * 
 *
 *   post:
 *     summary: Create a new user.
 *     description: post request body as json and create user. 
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Username 
 *                 example: Mou
 *               password:
 *                 type: string
 *                 description: Password
 *                 example: Pa$$W0rd
 *               email:
 *                 type: string
 *                 description: Email Address
 *                 example: test@example.com
 *     responses:
 *       200:
 *         description: request body post successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: Mou
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: Pa$$W0rd        
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 *
 * /api/users/{id}:
 *   put:
 *     summary: Edit user.
 *     description: edit selected user by id and post request body as json. 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: the id of user to be edited
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: Mou
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: Pa$$W0rd
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: test@example.com
 *     responses:
 *       200:
 *         description: selected id user is edited as request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: Mou
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: Pa$$W0rd        
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 *   delete:
 *     summary: Delete user by id.
 *     decription: Selected id user is going to be deleted from db.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: the id of user to be deleted
 *     responses:
 *       200:
 *         description: selected id user is deleted.
 */

